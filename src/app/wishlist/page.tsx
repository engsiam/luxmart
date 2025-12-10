"use client";

import { useWishlistStore } from "@/store/useWishlistStore";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingBag, Heart } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function WishlistPage() {
    const { items, removeItem } = useWishlistStore();
    const addItemToCart = useCartStore((state) => state.addItem);

    if (items.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center container mx-auto px-4 text-center">
                <div className="w-24 h-24 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center mb-8">
                    <Heart size={48} className="text-neutral-300" />
                </div>
                <h1 className="text-4xl font-bold mb-4">Your Wishlist is Empty</h1>
                <p className="text-neutral-500 dark:text-neutral-400 mb-8 max-w-md mx-auto text-lg">
                    Looks like you haven't saved any items yet. Browse our collection and find something you love!
                </p>
                <Link href="/shop" className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25">
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <ScrollReveal width="100%">
                <h1 className="text-4xl font-bold mb-8">My Wishlist ({items.length})</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((product) => (
                        <div key={product.id} className="group bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800 overflow-hidden hover:shadow-lg transition-all duration-300">
                            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                                <Image
                                    src={product.images[0]}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <button
                                    onClick={() => removeItem(product.id)}
                                    className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-full text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
                                    title="Remove from Wishlist"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>

                            <div className="p-6">
                                <Link href={`/product/${product.slug}`}>
                                    <h3 className="font-bold text-lg mb-2 hover:text-primary transition-colors truncate">{product.name}</h3>
                                </Link>
                                <p className="text-primary font-bold text-xl mb-4">${product.price.toFixed(2)}</p>

                                <button
                                    onClick={() => addItemToCart(product, 1)}
                                    className="w-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 py-3 rounded-xl font-bold hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all flex items-center justify-center gap-2"
                                >
                                    <ShoppingBag size={20} />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </div>
    );
}
