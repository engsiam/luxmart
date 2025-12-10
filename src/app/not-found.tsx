import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center container mx-auto px-4 text-center">
            <h1 className="text-9xl font-bold text-neutral-200 dark:text-neutral-800 mb-4">404</h1>
            <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-md mx-auto mb-10">
                Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
                >
                    <Home size={20} />
                    Back to Home
                </Link>
                <Link
                    href="/shop"
                    className="inline-flex items-center justify-center gap-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white px-8 py-3 rounded-xl font-bold hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all"
                >
                    Continue Shopping
                    <ArrowRight size={20} />
                </Link>
            </div>
        </div>
    );
}
