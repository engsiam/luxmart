"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
    {
        name: "Alex Morgan",
        role: "Founder & CEO",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
        bio: "Visionary leader with 15+ years in retail and e-commerce."
    },
    {
        name: "Sarah Chen",
        role: "Head of Design",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
        bio: "Award-winning designer passionate about user experience."
    },
    {
        name: "Marcus Johnson",
        role: "Chief Technology Officer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
        bio: "Tech innovator specializing in scalable architecture."
    },
    {
        name: "Emily Davis",
        role: "Customer Success Lead",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
        bio: "Dedicated to ensuring the best shopping experience for you."
    }
];

export default function Team() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-wider uppercase mb-2 block">Our Team</span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Minds Behind LuxeMart</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        We are a diverse team of dreamers, doers, and creators united by a single mission: to redefine online shopping.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-neutral-100 dark:bg-neutral-800">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                    <div className="flex gap-4 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
                                        <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
                                        <a href="#" className="hover:text-primary transition-colors"><Mail size={20} /></a>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                            <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                            <p className="text-neutral-500 text-sm leading-relaxed">
                                {member.bio}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
