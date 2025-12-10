"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Zap, Heart } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

const benefits = [
    { icon: Users, title: "Great Culture", desc: "Work with a passionate, diverse team." },
    { icon: Zap, title: "Fast Growth", desc: "Opportunities for rapid career advancement." },
    { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health coverage and wellness programs." },
];

const openings = [
    { title: "Senior Product Designer", dept: "Design", location: "Remote", type: "Full-time" },
    { title: "Frontend Developer", dept: "Engineering", location: "New York, NY", type: "Full-time" },
    { title: "Marketing Manager", dept: "Marketing", location: "London, UK", type: "Full-time" },
    { title: "Customer Success Specialist", dept: "Support", location: "Remote", type: "Part-time" },
];

export default function CareersPage() {
    return (
        <div className="pb-20">
            {/* Hero */}
            <section className="bg-neutral-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <ScrollReveal width="100%">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
                        <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-10">
                            We're building the future of e-commerce. Come help us create world-class experiences for millions of customers.
                        </p>
                        <Link href="#openings" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors">
                            View Open Positions <ArrowRight size={20} />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-white dark:bg-neutral-950">
                <div className="container mx-auto px-4">
                    <ScrollReveal width="100%">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
                            <p className="text-neutral-600 dark:text-neutral-400">More than just a job. It's a calling.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="p-8 bg-neutral-50 dark:bg-neutral-900 rounded-2xl text-center hover:shadow-lg transition-shadow">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                                        <benefit.icon size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                    <p className="text-neutral-600 dark:text-neutral-400">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Openings */}
            <section id="openings" className="py-20 container mx-auto px-4">
                <ScrollReveal width="100%">
                    <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>
                    <div className="space-y-4 max-w-4xl mx-auto">
                        {openings.map((job, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row items-center justify-between p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-primary transition-colors group cursor-pointer">
                                <div>
                                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{job.title}</h3>
                                    <div className="flex gap-4 text-sm text-neutral-500">
                                        <span>{job.dept}</span>
                                        <span>•</span>
                                        <span>{job.location}</span>
                                        <span>•</span>
                                        <span>{job.type}</span>
                                    </div>
                                </div>
                                <button className="mt-4 md:mt-0 px-6 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
