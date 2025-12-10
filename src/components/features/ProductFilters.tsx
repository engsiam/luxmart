"use client";

import { useState, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { products } from "@/lib/mockData";

interface FilterSectionProps {
    title: string;
    options: string[];
    selected: string[];
    onChange: (option: string) => void;
}

function FilterSection({ title, options, selected, onChange }: FilterSectionProps) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="border-b border-neutral-200 dark:border-neutral-800 py-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full text-left font-medium mb-4"
            >
                <span>{title}</span>
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {isOpen && (
                <div className="space-y-3">
                    {options.map((option) => (
                        <label key={option} className="flex items-center gap-3 cursor-pointer group">
                            <div className={cn(
                                "w-5 h-5 rounded border flex items-center justify-center transition-colors",
                                selected.includes(option)
                                    ? "bg-primary border-primary text-white"
                                    : "border-neutral-300 dark:border-neutral-700 group-hover:border-primary"
                            )}>
                                {selected.includes(option) && (
                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={selected.includes(option)}
                                onChange={() => onChange(option)}
                            />
                            <span className="text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-200">
                                {option}
                            </span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function ProductFilters() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Initialize state from URL params
    const [selectedCategories, setSelectedCategories] = useState<string[]>(
        searchParams.get("category")?.split(",") || []
    );
    const [selectedColors, setSelectedColors] = useState<string[]>(
        searchParams.get("color")?.split(",") || []
    );

    // Derive dynamic options from products
    const categories = useMemo(() => {
        const uniqueCategories = new Set(products.map(p => p.category));
        return Array.from(uniqueCategories).sort();
    }, []);

    const colors = useMemo(() => {
        const uniqueColors = new Set<string>();
        products.forEach(p => {
            if (p.variants) {
                p.variants.forEach(v => {
                    if (v.name.toLowerCase() === "color") {
                        v.options.forEach(o => uniqueColors.add(o));
                    }
                });
            }
        });
        return Array.from(uniqueColors).sort();
    }, []);

    const priceStats = useMemo(() => {
        const prices = products.map(p => p.price);
        return {
            min: Math.floor(Math.min(...prices)),
            max: Math.ceil(Math.max(...prices))
        };
    }, []);

    const [priceRange, setPriceRange] = useState<[number, number]>([
        Number(searchParams.get("minPrice")) || priceStats.min,
        Number(searchParams.get("maxPrice")) || priceStats.max
    ]);

    // Update URL when filters change
    const updateFilters = (
        newCategories: string[],
        newColors: string[],
        newPriceRange: [number, number]
    ) => {
        const params = new URLSearchParams(searchParams.toString());

        if (newCategories.length > 0) {
            params.set("category", newCategories.join(","));
        } else {
            params.delete("category");
        }

        if (newColors.length > 0) {
            params.set("color", newColors.join(","));
        } else {
            params.delete("color");
        }

        if (newPriceRange[0] > priceStats.min) {
            params.set("minPrice", newPriceRange[0].toString());
        } else {
            params.delete("minPrice");
        }

        if (newPriceRange[1] < priceStats.max) {
            params.set("maxPrice", newPriceRange[1].toString());
        } else {
            params.delete("maxPrice");
        }

        // Reset page to 1 when filters change
        params.delete("page");

        router.push(`?${params.toString()}`, { scroll: false });
    };

    const toggleCategory = (category: string) => {
        const newCategories = selectedCategories.includes(category)
            ? selectedCategories.filter(c => c !== category)
            : [...selectedCategories, category];

        setSelectedCategories(newCategories);
        updateFilters(newCategories, selectedColors, priceRange);
    };

    const toggleColor = (color: string) => {
        const newColors = selectedColors.includes(color)
            ? selectedColors.filter(c => c !== color)
            : [...selectedColors, color];

        setSelectedColors(newColors);
        updateFilters(selectedCategories, newColors, priceRange);
    };

    const handlePriceChange = (newRange: [number, number]) => {
        setPriceRange(newRange);
        // Debounce URL update for price slider could be added here, 
        // but for inputs onBlur or a specific "Apply" button is better.
        // For now, we update on change but maybe we should wait? 
        // Let's update on change for immediate feedback but it might be spammy.
        // Better: Update state, and have a useEffect or just update URL.
        updateFilters(selectedCategories, selectedColors, newRange);
    };

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">Filters</h3>
                <button
                    onClick={() => {
                        setSelectedCategories([]);
                        setSelectedColors([]);
                        setPriceRange([priceStats.min, priceStats.max]);
                        router.push("?", { scroll: false });
                    }}
                    className="text-sm text-neutral-500 hover:text-primary underline"
                >
                    Clear All
                </button>
            </div>

            <FilterSection
                title="Category"
                options={categories}
                selected={selectedCategories}
                onChange={toggleCategory}
            />

            {colors.length > 0 && (
                <FilterSection
                    title="Color"
                    options={colors}
                    selected={selectedColors}
                    onChange={toggleColor}
                />
            )}

            <div className="py-6">
                <h4 className="font-medium mb-4">Price Range</h4>
                <div className="flex items-center gap-4">
                    <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => handlePriceChange([Number(e.target.value), priceRange[1]])}
                        className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm"
                        placeholder="Min"
                        min={priceStats.min}
                    />
                    <span className="text-neutral-400">-</span>
                    <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceChange([priceRange[0], Number(e.target.value)])}
                        className="w-full px-3 py-2 border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm"
                        placeholder="Max"
                        max={priceStats.max}
                    />
                </div>
            </div>
        </div>
    );
}
