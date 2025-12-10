"use client";

import { motion } from "framer-motion";

export default function ShopBanner() {
    return (
        <div className="relative bg-neutral-900 text-white py-16 mb-12 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />

            <div className="container mx-auto px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <span className="text-yellow-400 font-bold tracking-wider uppercase mb-2 block">New Season</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Autumn Collection 2025</h1>
                    <p className="text-lg text-neutral-300 mb-8 max-w-xl">
                        Discover the latest trends in premium audio and lifestyle accessories.
                        Curated for the modern minimalists.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
