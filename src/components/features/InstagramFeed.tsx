"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

const posts = [
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529139574466-a302d27f6054?q=80&w=1970&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1976&auto=format&fit=crop",
];

export default function InstagramFeed() {
    return (
        <section className="py-20 bg-white dark:bg-neutral-950">
            <div className="container mx-auto px-4">
                <ScrollReveal width="100%">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-2">On The Grid</h2>
                            <p className="text-neutral-600 dark:text-neutral-400">
                                Inspired by you. Tag us @LuxeMart to be featured.
                            </p>
                        </div>
                        <Link
                            href="https://instagram.com"
                            target="_blank"
                            className="inline-flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors"
                        >
                            <Instagram size={18} />
                            Follow on Instagram
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[400px]">
                        {/* Large Item */}
                        <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl">
                            <Image
                                src={posts[0]}
                                alt="Shop the look"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Instagram className="text-white" size={32} />
                            </div>
                        </div>

                        {/* Small Items */}
                        {posts.slice(1).map((src, idx) => (
                            <div key={idx} className="relative group overflow-hidden rounded-2xl">
                                <Image
                                    src={src}
                                    alt="Shop the look"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Instagram className="text-white" size={24} />
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
