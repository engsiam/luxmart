export default function ShippingPage() {
    return (
        <div className="container mx-auto px-4 py-20 max-w-3xl">
            <h1 className="text-4xl font-bold mb-8">Shipping & Returns</h1>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="lead text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                    Last updated: {new Date().toLocaleDateString()}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. Shipping Policy</h2>
                <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                    We offer free standard shipping on all orders over $50 within the United States. For orders under $50, a flat rate of $5.99 applies.
                </p>
                <ul className="list-disc pl-6 mb-4 text-neutral-600 dark:text-neutral-400 space-y-2">
                    <li><strong>Standard Shipping:</strong> 3-5 business days</li>
                    <li><strong>Expedited Shipping:</strong> 2 business days ($15.00)</li>
                    <li><strong>Overnight Shipping:</strong> 1 business day ($25.00)</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. International Shipping</h2>
                <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                    We ship to over 100 countries worldwide. International shipping rates and delivery times vary depending on the destination and are calculated at checkout. Please note that customers are responsible for any customs duties or taxes that may apply.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Returns & Exchanges</h2>
                <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                    We want you to be completely satisfied with your purchase. If for any reason you are not, we accept returns of unused items in their original packaging within 30 days of delivery.
                </p>
                <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                    To initiate a return, please visit our Returns Center. Once your return is received and inspected, we will send you an email to notify you that we have received your returned item and process your refund.
                </p>
            </div>
        </div>
    );
}
