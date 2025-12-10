"use client";

import { Truck, ShieldCheck, Clock, CreditCard } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

const features = [
    {
        icon: Truck,
        title: "Free Shipping",
        description: "On all orders over $100. Global delivery available."
    },
    {
        icon: Clock,
        title: "24/7 Support",
        description: "Our dedicated team is here to help you anytime."
    },
    {
        icon: ShieldCheck,
        title: "Secure Payment",
        description: "100% secure payment with 256-bit encryption."
    },
    {
        icon: CreditCard,
        title: "Money Back",
        description: "30-day money-back guarantee on all products."
    }
];

export default function FeaturesGrid() {
    return (
        <section className="py-20 bg-white dark:bg-neutral-950">
            <div className="container mx-auto px-4">
                <ScrollReveal width="100%">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
