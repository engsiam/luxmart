"use client";

import Image from "next/image";
import { Users, Globe, Award, Heart } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";
import Team from "@/components/features/Team";

export default function AboutPage() {
    return (
        <div className="pb-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
                        alt="About Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <ScrollReveal width="100%">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Our Story</h1>
                        <p className="text-xl md:text-2xl text-neutral-200 font-light leading-relaxed">
                            Crafting premium experiences for the modern individual. We believe in quality, sustainability, and timeless design.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Mission Section */}
            <section className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <ScrollReveal>
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop"
                                alt="Our Mission"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <div>
                            <span className="text-accent font-bold tracking-wider uppercase mb-4 block">Our Mission</span>
                            <h2 className="text-4xl font-bold mb-6">Redefining Modern Commerce</h2>
                            <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-6">
                                Founded in 2025, LuxeMart began with a simple idea: that premium products shouldn't come with a premium markup. We work directly with artisans and manufacturers to bring you exceptional quality at honest prices.
                            </p>
                            <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
                                Our commitment goes beyond just products. We strive to create a community of like-minded individuals who appreciate the finer details in life. From our sustainable packaging to our 24/7 customer support, every aspect of LuxeMart is designed with you in mind.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-neutral-50 dark:bg-neutral-900 py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: Users, value: "50k+", label: "Happy Customers" },
                            { icon: Globe, value: "100+", label: "Countries Served" },
                            { icon: Award, value: "25+", label: "Design Awards" },
                            { icon: Heart, value: "1M+", label: "Products Sold" },
                        ].map((stat, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.1} width="100%">
                                <div className="text-center p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                        <stat.icon size={24} />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                                    <p className="text-neutral-500">{stat.label}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <ScrollReveal width="100%">
                <Team />
            </ScrollReveal>
        </div>
    );
}
