"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/mockData";

export default function CollectionGrid() {
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="flex items-end justify-between mb-10">
                <div>
                    <span className="text-accent font-bold tracking-wider uppercase mb-2 block">Collections</span>
                    <h2 className="text-3xl md:text-4xl font-bold">Shop by Category</h2>
                </div>
                <Link href="/collections" className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline">
                    View All <ArrowRight size={16} />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/shop?category=${category.slug}`}
                        className="group relative h-[400px] rounded-2xl overflow-hidden block"
                    >
                        <Image
                            src={category.image}
                            alt={category.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-0 transition-transform duration-500 group-hover:-translate-y-2">
                                {category.name}
                            </h3>
                            <div className="flex items-center gap-2 text-white/80 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                                <span className="font-medium">Shop Now</span>
                                <ArrowRight size={16} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-8 text-center md:hidden">
                <Link href="/collections" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                    View All <ArrowRight size={16} />
                </Link>
            </div>
        </section>
    );
}
