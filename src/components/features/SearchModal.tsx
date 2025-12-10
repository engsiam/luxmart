"use client";

import { useState, useEffect, useRef } from "react";
import { X, Search, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/mockData";
import { Product } from "@/types";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Product[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    useEffect(() => {
        if (query.trim() === "") {
            setResults([]);
            return;
        }

        const searchTerms = query.toLowerCase().split(" ");
        const filtered = products.filter(product => {
            const searchableText = `${product.name} ${product.description} ${product.category} ${product.tags.join(" ")}`.toLowerCase();
            return searchTerms.every(term => searchableText.includes(term));
        });

        setResults(filtered.slice(0, 5)); // Limit to 5 results
    }, [query]);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    const handleProductClick = (slug: string) => {
        router.push(`/product/${slug}`);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                {/* Header / Input */}
                <div className="flex items-center gap-4 p-4 border-b border-neutral-100 dark:border-neutral-800">
                    <Search className="text-neutral-400" size={24} />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search products, categories, tags..."
                        className="flex-1 bg-transparent text-lg placeholder:text-neutral-400 focus:outline-none dark:text-white"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
                    >
                        <X size={20} className="text-neutral-500" />
                    </button>
                </div>

                {/* Results */}
                <div className="max-h-[60vh] overflow-y-auto">
                    {query && results.length === 0 ? (
                        <div className="p-8 text-center text-neutral-500">
                            No products found for "{query}"
                        </div>
                    ) : (
                        <div className="p-2">
                            {results.map((product) => (
                                <div
                                    key={product.id}
                                    onClick={() => handleProductClick(product.slug)}
                                    className="flex items-center gap-4 p-3 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 rounded-xl cursor-pointer group transition-colors"
                                >
                                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-neutral-100 flex-shrink-0">
                                        <Image
                                            src={product.images[0]}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-medium group-hover:text-primary transition-colors dark:text-neutral-200">
                                            {product.name}
                                        </h4>
                                        <p className="text-sm text-neutral-500 capitalize">
                                            {product.category}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="font-bold text-neutral-900 dark:text-white">
                                            ${product.price.toFixed(2)}
                                        </span>
                                        <ChevronRight size={16} className="text-neutral-300 group-hover:text-primary transition-colors" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {!query && (
                        <div className="p-8 text-center">
                            <p className="text-neutral-400 text-sm">
                                Start typing to search for products...
                            </p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                {results.length > 0 && (
                    <div className="p-3 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 text-center">
                        <Link
                            href={`/shop?search=${query}`}
                            onClick={onClose}
                            className="text-sm text-primary hover:underline font-medium"
                        >
                            View all results
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
