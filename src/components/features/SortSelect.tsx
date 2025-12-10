"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortSelect() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentSort = searchParams.get("sort") || "featured";

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSort = e.target.value;
        const params = new URLSearchParams(searchParams.toString());

        if (newSort === "featured") {
            params.delete("sort");
        } else {
            params.set("sort", newSort);
        }

        router.push(`?${params.toString()}`);
    };

    return (
        <select
            name="sort"
            className="px-4 py-2 border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20"
            value={currentSort}
            onChange={handleSortChange}
        >
            <option value="featured">Sort by: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest Arrivals</option>
        </select>
    );
}
