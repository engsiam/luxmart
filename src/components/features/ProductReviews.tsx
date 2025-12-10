"use client";

import { Star, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
    {
        id: 1,
        author: "Sarah M.",
        rating: 5,
        date: "2 days ago",
        content: "Absolutely love this product! The quality is outstanding and it arrived much faster than expected.",
        helpful: 12
    },
    {
        id: 2,
        author: "James R.",
        rating: 4,
        date: "1 week ago",
        content: "Great value for money. The design is sleek and modern. Only wish it came in more colors.",
        helpful: 8
    },
    {
        id: 3,
        author: "Emily L.",
        rating: 5,
        date: "2 weeks ago",
        content: "Exceeded my expectations. Customer service was also very helpful when I had a question.",
        helpful: 15
    }
];

export default function ProductReviews() {
    return (
        <div className="py-12 border-t border-neutral-200 dark:border-neutral-800">
            <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>

            <div className="grid gap-8">
                {reviews.map((review, index) => (
                    <motion.div
                        key={review.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                                    {review.author[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold">{review.author}</h4>
                                    <div className="flex items-center gap-1 text-yellow-400 text-sm">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-neutral-300"} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <span className="text-sm text-neutral-500">{review.date}</span>
                        </div>

                        <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                            {review.content}
                        </p>

                        <button className="flex items-center gap-2 text-sm text-neutral-500 hover:text-primary transition-colors">
                            <ThumbsUp size={16} />
                            Helpful ({review.helpful})
                        </button>
                    </motion.div>
                ))}
            </div>

            <button className="mt-8 w-full py-3 border border-neutral-200 dark:border-neutral-800 rounded-lg font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                Load More Reviews
            </button>
        </div>
    );
}
