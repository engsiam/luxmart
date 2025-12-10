"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/common/ScrollReveal";
import { products } from "@/lib/mockData";

// Select specific products for the hotspots
const hotspotProducts = [
    {
        ...products[0],
        x: 45, // Percentage from left
        y: 60  // Percentage from top
    },
    {
        ...products[1],
        x: 65,
        y: 40
    },
    {
        ...products[2],
        x: 30,
        y: 35
    }
];

export default function ShopTheLook() {
    const [activeSpot, setActiveSpot] = useState<number | null>(null);

    return (
        <section className="py-20 bg-neutral-100 dark:bg-neutral-900">
            <div className="container mx-auto px-4">
                <ScrollReveal width="100%">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold tracking-wider uppercase mb-2 block">Inspiration</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop The Look</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            Discover the pieces that make the outfit. Hover over the dots to explore the products.
                        </p>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[21/9] bg-neutral-200 group">
                        {/* Main Banner Image */}
                        <Image
                            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
                            alt="Shop the look banner"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10" />

                        {/* Hotspots */}
                        {hotspotProducts.map((product, index) => (
                            <div
                                key={product.id}
                                className="absolute"
                                style={{ top: `${product.y}%`, left: `${product.x}%` }}
                                onMouseEnter={() => setActiveSpot(index)}
                                onMouseLeave={() => setActiveSpot(null)}
                            >
                                {/* The Dot */}
                                <div className="relative cursor-pointer z-20">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/30 backdrop-blur-md border border-white flex items-center justify-center relative z-10 shadow-lg hover:scale-110 transition-transform">
                                        <Plus className={`w-5 h-5 text-white transition-transform duration-300 ${activeSpot === index ? "rotate-45" : ""}`} />
                                    </div>
                                    {/* Pulse Effect */}
                                    <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-50" />
                                </div>

                                {/* The Product Card Tooltip */}
                                <AnimatePresence>
                                    {activeSpot === index && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute z-30 bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 md:w-72"
                                        >
                                            <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 shadow-xl border border-neutral-100 dark:border-neutral-700">
                                                <div className="flex gap-4">
                                                    <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-neutral-100">
                                                        <Image
                                                            src={product.images[0]}
                                                            alt={product.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-bold text-sm mb-1 truncate">{product.name}</h4>
                                                        <p className="text-primary font-bold text-sm mb-3">${product.price}</p>
                                                        <Link
                                                            href={`/product/${product.slug}`}
                                                            className="text-xs font-bold underline decoration-neutral-300 hover:decoration-black dark:hover:decoration-white underline-offset-4 transition-all flex items-center gap-1"
                                                        >
                                                            View Details <ArrowRight size={12} />
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* Arrow pointing down */}
                                                <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-neutral-800 rotate-45 border-r border-b border-neutral-100 dark:border-neutral-700" />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
