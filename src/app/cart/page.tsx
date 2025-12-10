"use client";

import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";

export default function CartPage() {
    const { items, removeItem, updateQuantity, total } = useCartStore();

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
                <p className="text-neutral-500 mb-8">Looks like you haven't added anything yet.</p>
                <Link href="/shop" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    Start Shopping <ArrowRight size={20} />
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Cart Items */}
                <div className="flex-1 space-y-6">
                    {items.map((item) => (
                        <div key={item.cartId} className="flex gap-6 p-6 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                            <div className="relative w-24 h-24 flex-shrink-0 bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden">
                                {item.images[0] ? (
                                    <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-xs text-neutral-400">No Image</div>
                                )}
                            </div>

                            <div className="flex-1 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-lg">{item.name}</h3>
                                        {item.selectedVariant && (
                                            <p className="text-sm text-neutral-500">{item.selectedVariant.name}: {item.selectedVariant.option}</p>
                                        )}
                                    </div>
                                    <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center border border-neutral-200 dark:border-neutral-800 rounded-lg">
                                        <button
                                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                                            className="p-2 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                                            disabled={item.quantity <= 1}
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="px-4 font-medium">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                                            className="p-2 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => removeItem(item.cartId)}
                                        className="text-red-500 hover:text-red-600 flex items-center gap-1 text-sm font-medium"
                                    >
                                        <Trash2 size={16} />
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div className="w-full lg:w-96 flex-shrink-0">
                    <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 sticky top-24">
                        <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                                <span>Subtotal</span>
                                <span>${total().toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                                <span>Tax</span>
                                <span>Calculated at checkout</span>
                            </div>
                            <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4 flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>${total().toFixed(2)}</span>
                            </div>
                        </div>

                        <Link href="/checkout" className="block w-full bg-primary text-white text-center py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors">
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
