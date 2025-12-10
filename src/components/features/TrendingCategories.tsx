"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
    {
        id: 1,
        name: "Headphones",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
        count: "12 Products"
    },
    {
        id: 2,
        name: "Smart Watches",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
        count: "8 Products"
    },
    {
        id: 3,
        name: "Cameras",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop",
        count: "15 Products"
    },
    {
        id: 4,
        name: "Accessories",
        image: "https://images.unsplash.com/photo-1572569028738-411a2963ccd0?q=80&w=2070&auto=format&fit=crop",
        count: "24 Products"
    }
];

export default function TrendingCategories() {
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="flex items-end justify-between mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-accent font-bold tracking-wider uppercase mb-2 block">Discover</span>
                    <h2 className="text-3xl md:text-4xl font-bold">Trending Categories</h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <Link href="/collections" className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline">
                        View All Collections <ArrowRight size={16} />
                    </Link>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                    <Link
                        key={category.id}
                        href={`/shop?category=${encodeURIComponent(category.name)}`}
                        className="block"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[300px] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                    {category.name}
                                </h3>
                                <p className="text-white/70 text-sm mb-4">{category.count}</p>
                                <span className="inline-flex items-center gap-2 text-white text-sm font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    Shop Now <ArrowRight size={16} />
                                </span>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
