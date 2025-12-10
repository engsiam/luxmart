"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PromoBanner() {
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="relative rounded-3xl overflow-hidden min-h-[500px] flex items-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
                />
                <div className="absolute inset-0 z-0 bg-black/60" />

                {/* Content */}
                <div className="relative z-10 w-full px-6 md:px-20 py-12">
                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-md border border-white/10">
                            Limited Time Offer
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Elevate Your Style <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                                Get 20% Off
                            </span>
                        </h2>
                        <p className="text-lg md:text-xl text-neutral-200 mb-10 leading-relaxed max-w-lg">
                            Join our exclusive community and unlock special savings on your first order. Experience premium quality without compromise.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/shop"
                                className="bg-white text-neutral-900 px-10 py-4 rounded-full font-bold hover:bg-neutral-100 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-white/10"
                            >
                                Shop Now <ArrowRight size={20} />
                            </Link>
                            <Link
                                href="/signup"
                                className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm"
                            >
                                Create Account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
