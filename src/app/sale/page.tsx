import ProductCard from "@/components/common/ProductCard";
import { products } from "@/lib/mockData";

export default function SalePage() {
    const saleItems = products.filter((p) => p.originalPrice);

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-8" suppressHydrationWarning>
                <h1 className="text-4xl font-bold mb-4">Sale</h1>
                <p className="text-neutral-600 dark:text-neutral-400">
                    Exclusive deals on our premium collection. Limited time offers.
                </p>
            </div>

            {saleItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {saleItems.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <p className="text-neutral-500">No items on sale at the moment.</p>
                </div>
            )}
        </div>
    );
}
