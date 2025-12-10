"use client";

import Image from "next/image";

const brands = [
    "Nike", "Adidas", "Gucci", "Zara", "H&M", "Uniqlo", "Puma", "Reebok"
];

export default function BrandMarquee() {
    return (
        <div className="py-12 bg-neutral-50 dark:bg-neutral-900 overflow-hidden border-y border-neutral-200 dark:border-neutral-800">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-sm font-bold tracking-widest text-neutral-500 uppercase">Trusted by world-class brands</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
                    {/* First set */}
                    {brands.map((brand, idx) => (
                        <span key={idx} className="text-4xl font-bold text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer select-none">
                            {brand}
                        </span>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {brands.map((brand, idx) => (
                        <span key={`dup-${idx}`} className="text-4xl font-bold text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer select-none">
                            {brand}
                        </span>
                    ))}
                    {/* Triplicate set for wide screens */}
                    {brands.map((brand, idx) => (
                        <span key={`tri-${idx}`} className="text-4xl font-bold text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer select-none">
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
