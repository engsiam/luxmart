"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types";
import ProductCard from "@/components/common/ProductCard";
import ScrollReveal from "@/components/common/ScrollReveal";

interface RecentlyViewedProps {
    currentProductId: string;
}

export default function RecentlyViewed({ currentProductId }: RecentlyViewedProps) {
    const [recentProducts, setRecentProducts] = useState<Product[]>([]);

    useEffect(() => {
        // Load from localStorage
        const stored = localStorage.getItem("recentlyViewed");
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                // Filter out current product and limit to 4
                const filtered = parsed.filter((p: Product) => p.id !== currentProductId).slice(0, 4);
                setRecentProducts(filtered);
            } catch (e) {
                console.error("Failed to parse recently viewed", e);
            }
        }
    }, [currentProductId]);

    if (recentProducts.length === 0) return null;

    return (
        <section className="py-12 border-t border-neutral-200 dark:border-neutral-800 mt-12">
            <ScrollReveal width="100%">
                <h2 className="text-2xl font-bold mb-8">Recently Viewed</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {recentProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
}
