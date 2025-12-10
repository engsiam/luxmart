"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface MegaMenuItem {
    label: string;
    href: string;
    description?: string;
}

interface MegaMenuSection {
    title: string;
    items: MegaMenuItem[];
}

interface MegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
    activeMenu: "shop" | "collections" | null;
}

const shopSections: MegaMenuSection[] = [
    {
        title: "Categories",
        items: [
            { label: "All Products", href: "/shop" },
            { label: "Clothing", href: "/shop?category=Clothing" },
            { label: "Accessories", href: "/accessories" },
            { label: "Footwear", href: "/shop?category=Footwear" },
            { label: "Home & Living", href: "/shop?category=Home" },
        ]
    },
    {
        title: "Collections",
        items: [
            { label: "New Arrivals", href: "/shop?sort=newest" },
            { label: "Best Sellers", href: "/shop?sort=price-desc" }, // Approximate
            { label: "Summer Edit", href: "/shop?collection=summer" },
            { label: "Essentials", href: "/shop?collection=urban" },
        ]
    }
];

const collectionSections: MegaMenuSection[] = [
    {
        title: "Featured",
        items: [
            { label: "Spring 2025", href: "/shop?collection=spring" }, // Using generic for now or match available mocks
            { label: "Urban Minimalist", href: "/shop?collection=urban" },
            { label: "Sustainable Series", href: "/shop?collection=eco" },
        ]
    },
    {
        title: "Collaborations",
        items: [
            { label: "Luxe x Designer", href: "/shop?collection=designer" },
            { label: "Artist Series", href: "/shop?collection=art" },
        ]
    }
];

export default function MegaMenu({ isOpen, onClose, activeMenu }: MegaMenuProps) {
    const sections = activeMenu === "shop" ? shopSections : collectionSections;
    const featuredImage = activeMenu === "shop"
        ? "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
        : "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop";

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 shadow-xl z-40"

                >
                    <div className="container mx-auto px-4 py-8">
                        <div className="grid grid-cols-12 gap-8">
                            {/* Links Sections */}
                            <div className="col-span-8 grid grid-cols-2 gap-8">
                                {sections.map((section, idx) => (
                                    <div key={idx}>
                                        <h3 className="font-bold text-neutral-900 dark:text-white mb-4 tracking-wide uppercase text-sm">
                                            {section.title}
                                        </h3>
                                        <ul className="space-y-3">
                                            {section.items.map((item, iIdx) => (
                                                <li key={iIdx}>
                                                    <Link
                                                        href={item.href}
                                                        className="group block"
                                                        onClick={onClose}
                                                    >
                                                        <span className="text-neutral-600 dark:text-neutral-400 group-hover:text-primary transition-colors text-sm font-medium">
                                                            {item.label}
                                                        </span>
                                                        {item.description && (
                                                            <p className="text-xs text-neutral-400 mt-0.5 group-hover:text-neutral-500 transition-colors">
                                                                {item.description}
                                                            </p>
                                                        )}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* Featured Image */}
                            <div className="col-span-4">
                                <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                                    <Image
                                        src={featuredImage}
                                        alt="Featured"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <p className="font-bold text-lg mb-1">New Arrivals</p>
                                        <Link href="/shop" className="text-sm font-medium hover:underline flex items-center gap-1">
                                            Shop Now <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
