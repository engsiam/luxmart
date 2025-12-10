"use client";

import { useEffect, useRef, useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import gsap from "@/lib/gsap";
import { cn } from "@/lib/utils";

export default function CartDrawer() {
    const { isOpen, closeCart, items, removeItem, updateQuantity, total } = useCartStore();
    const drawerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const drawer = drawerRef.current;
        const overlay = overlayRef.current;
        const content = contentRef.current;

        if (!drawer || !overlay || !content) return;

        if (isOpen) {
            // Open animation
            gsap.set(drawer, { display: "block" });
            gsap.to(overlay, { opacity: 1, duration: 0.3, ease: "power2.out" });
            gsap.to(content, { x: "0%", duration: 0.4, ease: "power3.out" });
            document.body.style.overflow = "hidden";
        } else {
            // Close animation
            const ctx = gsap.context(() => {
                gsap.to(overlay, { opacity: 0, duration: 0.3, ease: "power2.in" });
                gsap.to(content, {
                    x: "100%",
                    duration: 0.3,
                    ease: "power3.in",
                    onComplete: () => {
                        gsap.set(drawer, { display: "none" });
                        document.body.style.overflow = "";
                    },
                });
            });
            return () => ctx.revert();
        }
    }, [isOpen, mounted]);

    if (!mounted) return null;

    const freeShippingThreshold = 150;
    const currentTotal = total();
    const progress = Math.min((currentTotal / freeShippingThreshold) * 100, 100);
    const remainingForFreeShipping = Math.max(freeShippingThreshold - currentTotal, 0);

    return (
        <div
            ref={drawerRef}
            className="fixed inset-0 z-[60] hidden"
            aria-labelledby="slide-over-title"
            role="dialog"
            aria-modal="true"
        >
            {/* Overlay */}
            <div
                ref={overlayRef}
                className="fixed inset-0 bg-black/50 opacity-0 backdrop-blur-sm transition-opacity"
                onClick={closeCart}
            />

            {/* Drawer Panel */}
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
                <div
                    ref={contentRef}
                    className="w-screen max-w-md transform translate-x-full pointer-events-auto bg-white dark:bg-neutral-900 shadow-xl flex flex-col h-full"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-6 sm:px-6 border-b border-neutral-200 dark:border-neutral-800">
                        <h2 className="text-lg font-medium text-neutral-900 dark:text-white" id="slide-over-title">
                            Shopping Cart
                        </h2>
                        <button
                            type="button"
                            className="text-neutral-400 hover:text-neutral-500 focus:outline-none"
                            onClick={closeCart}
                        >
                            <span className="sr-only">Close panel</span>
                            <X size={24} />
                        </button>
                    </div>

                    {/* Free Shipping Progress */}
                    <div className="px-4 pt-4 sm:px-6">
                        <div className="mb-2 text-center text-sm font-medium">
                            {remainingForFreeShipping > 0 ? (
                                <span className="text-neutral-600 dark:text-neutral-300">
                                    You are <span className="text-primary">${remainingForFreeShipping.toFixed(2)}</span> away from <strong>Free Shipping</strong>!
                                </span>
                            ) : (
                                <span className="text-green-600 flex items-center justify-center gap-1">
                                    🎉 You've unlocked <strong>Free Shipping</strong>!
                                </span>
                            )}
                        </div>
                        <div className="h-2 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary transition-all duration-500 ease-out"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        {items.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-center">
                                <p className="text-neutral-500 mb-4">Your cart is empty.</p>
                                <button
                                    onClick={closeCart}
                                    className="text-primary font-medium hover:underline"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        ) : (
                            <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
                                {items.map((item) => (
                                    <li key={item.cartId} className="flex py-6">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-neutral-200 dark:border-neutral-800 relative">
                                            {item.images[0] ? (
                                                <Image
                                                    src={item.images[0]}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover object-center"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-neutral-100 flex items-center justify-center text-xs text-neutral-400">
                                                    No Image
                                                </div>
                                            )}
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div className="flex justify-between text-base font-medium text-neutral-900 dark:text-white">
                                                    <h3>{item.name}</h3>
                                                    <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                                                </div>
                                                {item.selectedVariant && (
                                                    <p className="mt-1 text-sm text-neutral-500">
                                                        {item.selectedVariant.name}: {item.selectedVariant.option}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                <div className="flex items-center border border-neutral-200 dark:border-neutral-800 rounded-md">
                                                    <button
                                                        onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                                                        className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="px-2 font-medium">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                                                        className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() => removeItem(item.cartId)}
                                                    className="font-medium text-red-500 hover:text-red-600 flex items-center gap-1"
                                                >
                                                    <Trash2 size={14} />
                                                    <span>Remove</span>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                        <div className="border-t border-neutral-200 dark:border-neutral-800 px-4 py-6 sm:px-6 bg-neutral-50 dark:bg-neutral-900">
                            <div className="flex justify-between text-base font-medium text-neutral-900 dark:text-white mb-4">
                                <p>Subtotal</p>
                                <p>${total().toFixed(2)}</p>
                            </div>
                            <p className="mt-0.5 text-sm text-neutral-500 mb-6">
                                Shipping and taxes calculated at checkout.
                            </p>
                            <div className="mt-6">
                                <Link
                                    href="/checkout"
                                    onClick={closeCart}
                                    className="w-full flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary/90 transition-colors"
                                >
                                    Checkout
                                </Link>
                            </div>
                            <div className="mt-6 flex justify-center text-center text-sm text-neutral-500">
                                <p>
                                    or{" "}
                                    <button
                                        type="button"
                                        className="font-medium text-primary hover:text-primary/80"
                                        onClick={closeCart}
                                    >
                                        Continue Shopping
                                        <span aria-hidden="true"> &rarr;</span>
                                    </button>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
