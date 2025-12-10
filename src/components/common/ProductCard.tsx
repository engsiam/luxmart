"use client";

import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import gsap from "@/lib/gsap";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { ShoppingBag, Star, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const actionsRef = useRef<HTMLDivElement>(null);
    const addItem = useCartStore((state) => state.addItem);
    const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isWishlisted = mounted ? isInWishlist(product.id) : false;

    const toggleWishlist = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (isWishlisted) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    const handleMouseEnter = () => {
        gsap.to(imageRef.current, {
            scale: 1.05,
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto",
        });
        gsap.to(actionsRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(imageRef.current, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto",
        });
        gsap.to(actionsRef.current, {
            y: 10,
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
        });
    };

    return (
        <div
            ref={cardRef}
            className="group gradient-border-card shadow-sm hover:shadow-md transition-shadow duration-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 dark:bg-neutral-800 rounded-t-2xl">
                {/* Wishlist Button */}
                <button
                    onClick={toggleWishlist}
                    className="absolute top-3 right-3 z-30 p-2 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-white dark:hover:bg-black transition-all opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0 duration-300"
                >
                    <Heart size={18} className={cn("transition-colors", isWishlisted && "fill-red-500 text-red-500")} />
                </button>

                <div ref={imageRef} className="w-full h-full relative">
                    {/* Placeholder for image if not available or external */}
                    {product.images[0] ? (
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            loading="lazy"
                            quality={80}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-neutral-400">
                            No Image
                        </div>
                    )}
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.originalPrice && (
                        <span className="bg-accent text-white text-xs font-bold px-2 py-1 rounded">
                            Sale
                        </span>
                    )}
                    {!product.inStock && (
                        <span className="bg-neutral-500 text-white text-xs font-bold px-2 py-1 rounded">
                            Out of Stock
                        </span>
                    )}
                </div>

                {/* Quick Actions (Hidden by default, shown on hover) */}
                <div
                    ref={actionsRef}
                    className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 translate-y-2"
                >
                    <button
                        onClick={() => addItem(product)}
                        className="flex-1 bg-primary text-white py-2 rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                    >
                        <ShoppingBag size={16} />
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <div className="flex items-start justify-between mb-1">
                    <Link href={`/product/${product.slug}`} className="hover:text-accent transition-colors">
                        <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
                    </Link>
                </div>

                <div className="flex items-center gap-1 mb-2 text-yellow-400 text-xs">
                    <Star size={14} fill="currentColor" />
                    <span className="text-neutral-600 dark:text-neutral-400">
                        {product.rating} ({product.reviewsCount})
                    </span>
                </div>

                <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-primary dark:text-white">
                        ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                        <span className="text-sm text-neutral-400 line-through">
                            ${product.originalPrice.toFixed(2)}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
