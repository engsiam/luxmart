import ProductCard from "@/components/common/ProductCard";
import { products } from "@/lib/mockData";

export default function AccessoriesPage() {
    const accessories = products.filter((p) => p.category === "Accessories");

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">Accessories</h1>
                <p className="text-neutral-600 dark:text-neutral-400">
                    Elevate your style with our premium collection of accessories.
                </p>
            </div>

            {accessories.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {accessories.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <p className="text-neutral-500">No accessories found at the moment.</p>
                </div>
            )}
        </div>
    );
}
