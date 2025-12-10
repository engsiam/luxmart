import SortSelect from "@/components/features/SortSelect";
import ProductCard from "@/components/common/ProductCard";
import ProductFilters from "@/components/features/ProductFilters";
import MobileFilterDrawer from "@/components/features/MobileFilterDrawer";
import ShopBanner from "@/components/features/ShopBanner";
import ScrollReveal from "@/components/common/ScrollReveal";
import { products } from "@/lib/mockData";
import { SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ShopPageProps {
    searchParams: Promise<{
        category?: string;
        color?: string;
        minPrice?: string;
        maxPrice?: string;
        sort?: string;
        page?: string;
        collection?: string;
    }>;
}

export default async function ShopPage(props: ShopPageProps) {
    const searchParams = await props.searchParams;

    // Filter Logic
    let filteredProducts = [...products];

    // 1. Category Filter
    if (searchParams.category) {
        const categories = searchParams.category.toLowerCase().split(",");
        filteredProducts = filteredProducts.filter((p) =>
            categories.includes(p.category.toLowerCase())
        );
    }

    // 2. Color Filter
    if (searchParams.color) {
        const colors = searchParams.color.toLowerCase().split(",");
        filteredProducts = filteredProducts.filter((p) => {
            const productColors = p.variants
                ?.find((v) => v.name.toLowerCase() === "color")
                ?.options.map((o) => o.toLowerCase());
            return productColors?.some((c) => colors.includes(c));
        });
    }

    // 3. Price Filter
    if (searchParams.minPrice || searchParams.maxPrice) {
        const min = Number(searchParams.minPrice) || 0;
        const max = Number(searchParams.maxPrice) || Infinity;
        filteredProducts = filteredProducts.filter(
            (p) => p.price >= min && p.price <= max
        );
    }

    // 4. Collection Filter
    if (searchParams.collection) {
        const collection = searchParams.collection.toLowerCase();
        switch (collection) {
            case "summer":
                filteredProducts = filteredProducts.filter(p =>
                    p.tags.some(t => ["summer", "sunglasses", "shirt"].includes(t.toLowerCase())) ||
                    p.category.toLowerCase() === "clothing"
                );
                break;
            case "urban":
                filteredProducts = filteredProducts.filter(p =>
                    p.tags.some(t => ["urban", "black", "jacket", "hoodie", "watch"].includes(t.toLowerCase()))
                );
                break;
            case "tech":
                filteredProducts = filteredProducts.filter(p =>
                    ["electronics", "headphones", "smart watches", "cameras"].includes(p.category.toLowerCase()) ||
                    p.tags.includes("tech")
                );
                break;
            case "home":
                filteredProducts = filteredProducts.filter(p =>
                    p.category.toLowerCase() === "home & living" ||
                    p.tags.includes("decor")
                );
                break;
            case "travel":
                filteredProducts = filteredProducts.filter(p =>
                    p.tags.some(t => ["travel", "bag", "backpack", "luggage"].includes(t.toLowerCase()))
                );
                break;
            default:
                break;
        }
    }

    // Sort Logic
    if (searchParams.sort) {
        switch (searchParams.sort) {
            case "price-asc":
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case "price-desc":
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case "newest":
                // Mock sorting by ID as proxy for date since we don't have dates
                filteredProducts.sort((a, b) => parseInt(b.id) - parseInt(a.id));
                break;
            default:
                break;
        }
    }

    // Pagination Logic
    const ITEMS_PER_PAGE = 6;
    const currentPage = Number(searchParams.page) || 1;
    const totalItems = filteredProducts.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // Helper to generate pagination links
    const createPageUrl = (pageNumber: number) => {
        const params = new URLSearchParams();
        if (searchParams.category) params.set("category", searchParams.category);
        if (searchParams.color) params.set("color", searchParams.color);
        if (searchParams.minPrice) params.set("minPrice", searchParams.minPrice);
        if (searchParams.maxPrice) params.set("maxPrice", searchParams.maxPrice);
        if (searchParams.sort) params.set("sort", searchParams.sort);
        params.set("page", pageNumber.toString());
        return `?${params.toString()}`;
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <ShopBanner />

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Shop All Products</h1>
                    <p className="text-neutral-500">
                        Showing {Math.min((currentPage - 1) * ITEMS_PER_PAGE + 1, totalItems)} - {Math.min(currentPage * ITEMS_PER_PAGE, totalItems)} of {totalItems} results
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <MobileFilterDrawer>
                        <ProductFilters />
                    </MobileFilterDrawer>

                    {/* Simple Sort Form */}
                    <SortSelect />
                </div>
            </div>

            <div className="flex gap-8">
                {/* Sidebar Filters (Desktop) */}
                <aside className="hidden md:block w-64 flex-shrink-0">
                    <ProductFilters />
                </aside>

                {/* Product Grid */}
                <div className="flex-1">
                    {paginatedProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {paginatedProducts.map((product, index) => (
                                <ScrollReveal key={product.id} delay={index * 0.05} width="100%">
                                    <ProductCard product={product} />
                                </ScrollReveal>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <h3 className="text-xl font-bold mb-2">No products found</h3>
                            <p className="text-neutral-500">Try adjusting your filters.</p>
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-12 flex justify-center gap-2">
                            <Link
                                href={createPageUrl(currentPage - 1)}
                                className={cn(
                                    "px-4 py-2 border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors",
                                    currentPage <= 1 && "pointer-events-none opacity-50"
                                )}
                                aria-disabled={currentPage <= 1}
                            >
                                Previous
                            </Link>

                            {/* Smart Pagination */}
                            {(() => {
                                const pages = [];
                                // Always show first page
                                pages.push(1);

                                if (currentPage > 3) {
                                    pages.push("...");
                                }

                                // Show pages around current
                                for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
                                    pages.push(i);
                                }

                                if (currentPage < totalPages - 2) {
                                    pages.push("...");
                                }

                                // Always show last page if > 1
                                if (totalPages > 1) {
                                    pages.push(totalPages);
                                }

                                return pages.map((page, index) => {
                                    if (page === "...") {
                                        return (
                                            <span key={`ellipsis-${index}`} className="px-4 py-2 text-neutral-400">
                                                ...
                                            </span>
                                        );
                                    }

                                    const pageNum = page as number;
                                    return (
                                        <Link
                                            key={pageNum}
                                            href={createPageUrl(pageNum)}
                                            className={cn(
                                                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                                                currentPage === pageNum
                                                    ? "bg-primary text-white"
                                                    : "border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900"
                                            )}
                                        >
                                            {pageNum}
                                        </Link>
                                    );
                                });
                            })()}

                            <Link
                                href={createPageUrl(currentPage + 1)}
                                className={cn(
                                    "px-4 py-2 border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors",
                                    currentPage >= totalPages && "pointer-events-none opacity-50"
                                )}
                                aria-disabled={currentPage >= totalPages}
                            >
                                Next
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
