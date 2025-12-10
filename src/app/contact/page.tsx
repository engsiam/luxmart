"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MapPin, Phone, Send, ArrowRight, Clock, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import FAQ from "@/components/features/FAQ";
import Image from "next/image";
import { useRef } from "react";

function ParallaxBackground() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div ref={ref} className="absolute inset-0 z-0">
            <motion.div style={{ y }} className="relative w-full h-[120%] -top-[10%]">
                <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
                    alt="Office Background"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>
            <div className="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-[2px]" />
        </div>
    );
}

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-primary/20">
            {/* Parallax Hero */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden mb-20">
                <ParallaxBackground />

                <div className="container mx-auto px-4 relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9] text-white drop-shadow-lg">
                            Let's Start a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                                Conversation.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-200 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                            Have a question about an order, a collaboration idea, or just want to say hello? We're hearing you.
                        </p>
                    </motion.div>
                </div>

                {/* Gradient fade to content */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent z-10" />
            </div>

            <section className="container mx-auto px-4 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Left Column: Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-5 space-y-12"
                    >
                        {/* Info Cards */}
                        <div className="grid gap-8">
                            <div className="group p-6 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-100 dark:border-white/10 hover:border-primary/20 transition-colors">
                                <div className="w-12 h-12 bg-white dark:bg-neutral-900 rounded-full flex items-center justify-center text-primary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <h3 className="text-lg font-bold mb-2">Email Us</h3>
                                <p className="text-neutral-500 dark:text-neutral-400 mb-4">
                                    Our friendly team is here to help.
                                </p>
                                <a href="mailto:hello@luxemart.com" className="text-lg font-medium hover:text-primary transition-colors block">
                                    hello@luxemart.com
                                </a>
                                <a href="mailto:press@luxemart.com" className="text-sm text-neutral-400 hover:text-primary transition-colors block mt-1">
                                    press@luxemart.com
                                </a>
                            </div>

                            <div className="group p-6 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-100 dark:border-white/10 hover:border-primary/20 transition-colors">
                                <div className="w-12 h-12 bg-white dark:bg-neutral-900 rounded-full flex items-center justify-center text-primary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="text-lg font-bold mb-2">Visit Us</h3>
                                <p className="text-neutral-500 dark:text-neutral-400 mb-4">
                                    Come say hello at our HQ.
                                </p>
                                <p className="font-medium">
                                    123 Fashion Avenue<br />
                                    New York, NY 10001
                                </p>
                            </div>

                            <div className="group p-6 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-100 dark:border-white/10 hover:border-primary/20 transition-colors">
                                <div className="w-12 h-12 bg-white dark:bg-neutral-900 rounded-full flex items-center justify-center text-primary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <h3 className="text-lg font-bold mb-2">Call Us</h3>
                                <p className="text-neutral-500 dark:text-neutral-400 mb-4">
                                    Mon-Fri from 8am to 5pm.
                                </p>
                                <a href="tel:+15550000000" className="text-lg font-medium hover:text-primary transition-colors">
                                    +1 (555) 000-0000
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-8 border-t border-neutral-100 dark:border-neutral-800">
                            <h4 className="font-bold mb-6">Follow Our Journey</h4>
                            <div className="flex gap-4">
                                {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="w-12 h-12 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-transparent transition-all duration-300"
                                    >
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Premium Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-white dark:bg-neutral-900 rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-neutral-200/50 dark:shadow-black/50 border border-neutral-100 dark:border-neutral-800 relative overflow-hidden">
                            {/* Decorative blurred blob inside card */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                            <h3 className="text-2xl font-bold mb-8 relative z-10">Send us a message</h3>
                            <form className="space-y-8 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            id="fname"
                                            className="peer w-full bg-transparent border-b-2 border-neutral-200 dark:border-neutral-700 py-3 text-lg font-medium placeholder-transparent focus:border-primary focus:outline-none transition-colors"
                                            placeholder="First Name"
                                        />
                                        <label
                                            htmlFor="fname"
                                            className="absolute left-0 -top-3.5 text-sm text-neutral-500 dark:text-neutral-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary"
                                        >
                                            First Name
                                        </label>
                                    </div>
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            id="lname"
                                            className="peer w-full bg-transparent border-b-2 border-neutral-200 dark:border-neutral-700 py-3 text-lg font-medium placeholder-transparent focus:border-primary focus:outline-none transition-colors"
                                            placeholder="Last Name"
                                        />
                                        <label
                                            htmlFor="lname"
                                            className="absolute left-0 -top-3.5 text-sm text-neutral-500 dark:text-neutral-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary"
                                        >
                                            Last Name
                                        </label>
                                    </div>
                                </div>

                                <div className="relative group">
                                    <input
                                        type="email"
                                        id="email"
                                        className="peer w-full bg-transparent border-b-2 border-neutral-200 dark:border-neutral-700 py-3 text-lg font-medium placeholder-transparent focus:border-primary focus:outline-none transition-colors"
                                        placeholder="Email Address"
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute left-0 -top-3.5 text-sm text-neutral-500 dark:text-neutral-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary"
                                    >
                                        Email Address
                                    </label>
                                </div>

                                <div className="relative group">
                                    <select
                                        id="subject"
                                        className="peer w-full bg-transparent border-b-2 border-neutral-200 dark:border-neutral-700 py-3 text-lg font-medium focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
                                    >
                                        <option className="dark:bg-neutral-900">General Inquiry</option>
                                        <option className="dark:bg-neutral-900">Order Support</option>
                                        <option className="dark:bg-neutral-900">Returns & Exchanges</option>
                                        <option className="dark:bg-neutral-900">Partnership</option>
                                    </select>
                                    <label
                                        htmlFor="subject"
                                        className="absolute left-0 -top-3.5 text-sm text-neutral-500 dark:text-neutral-400"
                                    >
                                        Subject
                                    </label>
                                </div>

                                <div className="relative group">
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="peer w-full bg-transparent border-b-2 border-neutral-200 dark:border-neutral-700 py-3 text-lg font-medium placeholder-transparent focus:border-primary focus:outline-none transition-colors resize-none"
                                        placeholder="Message"
                                    ></textarea>
                                    <label
                                        htmlFor="message"
                                        className="absolute left-0 -top-3.5 text-sm text-neutral-500 dark:text-neutral-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary"
                                    >
                                        Message
                                    </label>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="group w-full md:w-auto bg-neutral-900 dark:bg-white text-white dark:text-black text-lg font-bold py-4 px-10 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1"
                                    >
                                        Send Message <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <div className="bg-neutral-50 dark:bg-neutral-900/50 py-20">
                <FAQ />
            </div>
        </div>
    );
}
