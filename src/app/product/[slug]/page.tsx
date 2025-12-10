"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useCartStore } from "@/store/useCartStore";
import { products } from "@/lib/mockData";
import { Star, Truck, Shield, Share2, Heart, Minus, Plus, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import Lightbox from "@/components/common/Lightbox";
import ScrollReveal from "@/components/common/ScrollReveal";
import ProductReviews from "@/components/features/ProductReviews";
import ProductSpecs from "@/components/features/ProductSpecs";
import RecentlyViewed from "@/components/features/RecentlyViewed";
import ProductCard from "@/components/common/ProductCard";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params);
    const product = products.find((p) => p.slug === slug);
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const addItem = useCartStore((state) => state.addItem);

    useEffect(() => {
        if (product) {
            const stored = localStorage.getItem("recentlyViewed");
            let recent = stored ? JSON.parse(stored) : [];
            recent = recent.filter((p: any) => p.id !== product.id);
            recent.unshift(product);
            if (recent.length > 10) recent.pop();
            localStorage.setItem("recentlyViewed", JSON.stringify(recent));
        }
    }, [product]);

    if (!product) {
        return <div className="container mx-auto py-20 text-center">Product not found</div>;
    }

    const handleAddToCart = () => {
        addItem(product, quantity);
    };

    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = () => {
        setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                {/* Gallery */}
                <div className="space-y-4">
                    <div
                        className="relative aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-2xl overflow-hidden group cursor-zoom-in"
                        onClick={() => setIsLightboxOpen(true)}
                    >
                        {product.images[selectedImage] ? (
                            <Image
                                src={product.images[selectedImage]}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-neutral-400">
                                No Image
                            </div>
                        )}

                        <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <Maximize2 size={20} />
                        </div>

                        {product.images.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-black"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-black"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </>
                        )}
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {product.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedImage(idx)}
                                className={cn(
                                    "relative aspect-square bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden border-2 transition-colors",
                                    selectedImage === idx
                                        ? "border-primary"
                                        : "border-transparent hover:border-neutral-300 dark:hover:border-neutral-700"
                                )}
                            >
                                <Image src={img} alt={`${product.name} ${idx + 1}`} fill className="object-cover" />
                            </button>
                        ))}
                        {/* Add placeholders if only 1 image */}
                        {product.images.length < 4 && Array.from({ length: 4 - product.images.length }).map((_, i) => (
                            <div key={`placeholder-${i}`} className="bg-neutral-50 dark:bg-neutral-900 rounded-lg" />
                        ))}
                    </div>
                </div>

                {/* Info */}
                <div>
                    <div className="mb-6">
                        <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
                        <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1 text-yellow-400">
                                <Star size={16} fill="currentColor" />
                                <span className="font-medium text-neutral-900 dark:text-white">{product.rating}</span>
                            </div>
                            <span className="text-neutral-500">({product.reviewsCount} reviews)</span>
                            <span className="text-neutral-300">|</span>
                            <span className={product.inStock ? "text-green-600" : "text-red-600"}>
                                {product.inStock ? "In Stock" : "Out of Stock"}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-baseline gap-4 mb-8">
                        <span className="text-4xl font-bold text-primary dark:text-white">
                            ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                            <span className="text-xl text-neutral-400 line-through">
                                ${product.originalPrice.toFixed(2)}
                            </span>
                        )}
                    </div>

                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                        {product.description}
                    </p>

                    {/* Variants (Mock) */}
                    {product.variants && (
                        <div className="space-y-6 mb-8">
                            {product.variants.map((variant) => (
                                <div key={variant.id}>
                                    <label className="block text-sm font-medium mb-2">{variant.name}</label>
                                    <div className="flex flex-wrap gap-3">
                                        {variant.options.map((option) => (
                                            <button
                                                key={option}
                                                className="px-4 py-2 border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm hover:border-primary hover:text-primary transition-colors focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <div className="flex items-center border border-neutral-200 dark:border-neutral-800 rounded-lg w-fit">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="p-3 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                            >
                                <Minus size={20} />
                            </button>
                            <span className="w-12 text-center font-medium">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="p-3 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                            >
                                <Plus size={20} />
                            </button>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                        >
                            Add to Cart
                        </button>

                        <button className="p-3 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors text-neutral-500">
                            <Heart size={24} />
                        </button>
                    </div>

                    {/* Features */}
                    {/* Trust Badges */}
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-primary/5 rounded-full text-primary">
                                <Shield size={20} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm">Secure Checkout</h4>
                                <p className="text-xs text-neutral-500">SSL Encrypted Payment</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-primary/5 rounded-full text-primary">
                                <Truck size={20} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm">Fast Shipping</h4>
                                <p className="text-xs text-neutral-500">Free over $150</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-primary/5 rounded-full text-primary">
                                <Share2 size={20} /> {/* Using Share2 as placeholder for Return icon if RefreshCcw not available, or just Check */}
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm">30-Day Returns</h4>
                                <p className="text-xs text-neutral-500">Hassle-free policy</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-primary/5 rounded-full text-primary">
                                <Star size={20} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm">Top Quality</h4>
                                <p className="text-xs text-neutral-500">Verified authenticity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Specs & Reviews */}
            <ScrollReveal width="100%" delay={0.2}>
                <ProductSpecs />
            </ScrollReveal>

            <ScrollReveal width="100%" delay={0.3}>
                <ProductReviews />
            </ScrollReveal>

            {/* Related Products */}
            <ScrollReveal width="100%" delay={0.4}>
                <div className="border-t border-neutral-200 dark:border-neutral-800 pt-16">
                    <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products
                            .filter((p) => p.category === product.category && p.id !== product.id)
                            .slice(0, 4)
                            .map((relatedProduct) => (
                                <ProductCard key={relatedProduct.id} product={relatedProduct} />
                            ))}
                    </div>
                </div>
            </ScrollReveal>

            {/* Recently Viewed */}
            <RecentlyViewed currentProductId={product.id} />

            <Lightbox
                isOpen={isLightboxOpen}
                onClose={() => setIsLightboxOpen(false)}
                images={product.images}
                currentIndex={selectedImage}
                onNext={nextImage}
                onPrev={prevImage}
            />
        </div>
    );
}
