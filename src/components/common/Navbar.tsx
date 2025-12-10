"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import { useUIStore } from "@/store/useUIStore";
import { ShoppingBag, Menu, Search, User, Heart, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/features/ThemeToggle";
import SearchModal from "@/components/features/SearchModal";
import MobileMenu from "@/components/common/MobileMenu";
import MegaMenu from "@/components/common/MegaMenu";

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<"shop" | "collections" | null>(null);
    const cartItems = useCartStore((state) => state.items);
    const openCart = useCartStore((state) => state.openCart);
    const toggleMobileMenu = useUIStore((state) => state.toggleMobileMenu);

    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                    isScrolled || activeMenu
                        ? "bg-white dark:bg-[#020617] border-neutral-200 dark:border-neutral-800 py-3 text-neutral-900 dark:text-white shadow-sm"
                        : pathname === "/"
                            ? "bg-transparent py-5 text-white"
                            : "bg-transparent py-5 text-neutral-900 dark:text-white"
                )}
                onMouseLeave={() => setActiveMenu(null)}
            >
                <div className="container mx-auto px-4 flex items-center justify-between relative">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold tracking-tight">
                        Luxe<span className="text-primary">Mart</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 h-full">
                        <Link
                            href="/"
                            className={cn(
                                "text-sm font-medium transition-colors py-4",
                                pathname === "/" ? "text-primary" : "hover:text-primary"
                            )}
                        >
                            Home
                        </Link>
                        <div
                            className="h-full flex items-center"
                            onMouseEnter={() => setActiveMenu("shop")}
                        >
                            <Link
                                href="/shop"
                                className={cn(
                                    "text-sm font-medium transition-colors py-4",
                                    pathname === "/shop" || pathname.startsWith("/shop") ? "text-primary" : "hover:text-primary"
                                )}
                            >
                                Shop
                            </Link>
                        </div>
                        <div
                            className="h-full flex items-center"
                            onMouseEnter={() => setActiveMenu("collections")}
                        >
                            <Link
                                href="/collections"
                                className={cn(
                                    "text-sm font-medium transition-colors py-4",
                                    pathname === "/collections" ? "text-primary" : "hover:text-primary"
                                )}
                            >
                                Collections
                            </Link>
                        </div>
                        <Link
                            href="/sale"
                            className={cn(
                                "text-sm font-medium text-red-500 hover:text-red-600 transition-colors py-4",
                                pathname === "/sale" && "font-bold underline underline-offset-4"
                            )}
                        >
                            Sale
                        </Link>
                        <Link
                            href="/blog"
                            className={cn(
                                "text-sm font-medium transition-colors py-4",
                                pathname === "/blog" || pathname.startsWith("/blog") ? "text-primary" : "hover:text-primary"
                            )}
                        >
                            Blog
                        </Link>
                        <Link
                            href="/about"
                            className={cn(
                                "text-sm font-medium transition-colors py-4",
                                pathname === "/about" ? "text-primary" : "hover:text-primary"
                            )}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className={cn(
                                "text-sm font-medium transition-colors py-4",
                                pathname === "/contact" ? "text-primary" : "hover:text-primary"
                            )}
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4" suppressHydrationWarning>
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="p-2 hover:bg-neutral-100 dark:hover:bg-white/10 rounded-full transition-colors"
                        >
                            <Search size={20} />
                        </button>
                        <Link href="/track-order" className="p-2 hover:bg-neutral-100 dark:hover:bg-white/10 rounded-full transition-colors hidden sm:block" title="Track Order">
                            <Truck size={20} />
                        </Link>
                        <Link href="/wishlist" className="p-2 hover:bg-neutral-100 dark:hover:bg-white/10 rounded-full transition-colors hidden sm:block">
                            <Heart size={20} />
                        </Link>
                        <Link href="/account" className="p-2 hover:bg-neutral-100 dark:hover:bg-white/10 rounded-full transition-colors hidden sm:block">
                            <User size={20} />
                        </Link>
                        <button
                            onClick={openCart}
                            className="relative p-2 hover:bg-neutral-100 dark:hover:bg-white/10 rounded-full transition-colors"
                        >
                            <ShoppingBag size={20} />
                            {mounted && cartCount > 0 && (
                                <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <ThemeToggle />
                        <button
                            onClick={toggleMobileMenu}
                            className="md:hidden p-2 hover:bg-neutral-100 dark:hover:bg-white/10 rounded-full transition-colors"
                        >
                            <Menu size={20} />
                        </button>
                    </div>
                </div>

                {/* Mega Menu */}
                <MegaMenu
                    isOpen={!!activeMenu}
                    activeMenu={activeMenu}
                    onClose={() => setActiveMenu(null)}
                />
            </header>

            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <MobileMenu />
        </>
    );
}
