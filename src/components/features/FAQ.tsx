"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "What is your return policy?",
        answer: "We offer a 30-day hassle-free return policy. If you're not completely satisfied with your purchase, you can return it for a full refund or exchange."
    },
    {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times vary depending on the destination."
    },
    {
        question: "How can I track my order?",
        answer: "Once your order ships, you'll receive a confirmation email with a tracking number. You can also track your order in your account dashboard."
    },
    {
        question: "Are your products authentic?",
        answer: "Absolutely. We source our products directly from authorized manufacturers and artisans to ensure 100% authenticity and quality."
    },
    {
        question: "Do you offer warranty?",
        answer: "Yes, all our electronics come with a standard 2-year manufacturer warranty. Extended warranty options are also available at checkout."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-neutral-50 dark:bg-neutral-900/50">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-neutral-600 dark:text-neutral-400">
                        Find answers to common questions about our products and services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
                            >
                                <span className="font-medium text-lg">{faq.question}</span>
                                <ChevronDown
                                    className={cn(
                                        "text-neutral-400 transition-transform duration-300",
                                        openIndex === index && "rotate-180"
                                    )}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
