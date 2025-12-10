"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ShoppingBag, User } from "lucide-react";
import { useUIStore } from "@/store/useUIStore";
import { useCartStore } from "@/store/useCartStore";
import { cn } from "@/lib/utils";

const links = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/collections", label: "Collections" },
    { href: "/sale", label: "Sale" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
    const pathname = usePathname();
    const { isMobileMenuOpen, closeMobileMenu } = useUIStore();
    const cartItems = useCartStore((state) => state.items);
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <AnimatePresence>
            {isMobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeMobileMenu}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
                    />

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 bottom-0 w-[300px] bg-white dark:bg-neutral-900 z-50 shadow-2xl md:hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                            <span className="font-bold text-lg">Menu</span>
                            <button
                                onClick={closeMobileMenu}
                                className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Links */}
                        <div className="flex-1 overflow-y-auto py-4">
                            <nav className="flex flex-col">
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={closeMobileMenu}
                                        className={cn(
                                            "px-6 py-4 flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors",
                                            pathname === link.href
                                                ? "text-primary font-medium bg-primary/5"
                                                : "text-neutral-600 dark:text-neutral-300"
                                        )}
                                    >
                                        {link.label}
                                        <ChevronRight size={16} className="text-neutral-400" />
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Footer Actions */}
                        <div className="p-6 border-t border-neutral-200 dark:border-neutral-800 space-y-4">
                            <Link
                                href="/account"
                                onClick={closeMobileMenu}
                                className="flex items-center gap-3 w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                            >
                                <User size={20} />
                                <span>My Account</span>
                            </Link>

                            <Link
                                href="/cart"
                                onClick={closeMobileMenu}
                                className="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <ShoppingBag size={20} />
                                    <span>View Cart</span>
                                </div>
                                {cartCount > 0 && (
                                    <span className="bg-white text-primary text-xs font-bold px-2 py-1 rounded-full">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
