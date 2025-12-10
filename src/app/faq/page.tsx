"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        category: "Orders & Shipping",
        items: [
            {
                q: "How long does shipping take?",
                a: "Standard shipping typically takes 3-5 business days within the US. International shipping can take 7-14 business days depending on the destination."
            },
            {
                q: "Do you ship internationally?",
                a: "Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times vary by location."
            },
            {
                q: "Can I track my order?",
                a: "Absolutely! Once your order ships, you'll receive a confirmation email with a tracking number to monitor your package's journey."
            }
        ]
    },
    {
        category: "Returns & Exchanges",
        items: [
            {
                q: "What is your return policy?",
                a: "We offer a 30-day return policy for all unused items in their original packaging. Returns are free for US customers."
            },
            {
                q: "How do I initiate a return?",
                a: "Visit our Returns Center, enter your order number and email, and follow the instructions to generate a prepaid shipping label."
            }
        ]
    },
    {
        category: "Products & Sizing",
        items: [
            {
                q: "Are your products sustainable?",
                a: "We are committed to sustainability. 80% of our products are made from recycled or organic materials, and we use plastic-free packaging."
            },
            {
                q: "How do I find my size?",
                a: "Check the 'Size Guide' link on each product page for detailed measurements and fitting advice."
            }
        ]
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleFAQ = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <div className="container mx-auto px-4 py-20 max-w-4xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
                <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                    Find answers to common questions about our products, shipping, and returns.
                </p>
            </div>

            <div className="space-y-12">
                {faqs.map((section, sIdx) => (
                    <div key={sIdx}>
                        <h2 className="text-2xl font-bold mb-6 text-primary">{section.category}</h2>
                        <div className="space-y-4">
                            {section.items.map((item, iIdx) => {
                                const id = `${sIdx}-${iIdx}`;
                                const isOpen = openIndex === id;

                                return (
                                    <div
                                        key={iIdx}
                                        className={`border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-neutral-50 dark:bg-neutral-900 shadow-sm' : 'bg-white dark:bg-neutral-950'}`}
                                    >
                                        <button
                                            onClick={() => toggleFAQ(id)}
                                            className="w-full flex items-center justify-between p-6 text-left font-medium text-lg hover:text-primary transition-colors"
                                        >
                                            {item.q}
                                            {isOpen ? <Minus size={20} className="text-primary" /> : <Plus size={20} className="text-neutral-400" />}
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                        >
                                            <div className="p-6 pt-0 text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-transparent">
                                                {item.a}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
