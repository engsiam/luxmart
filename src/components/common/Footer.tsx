"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Loader2,
    CheckCircle,
    Mail,
    Phone,
    MapPin,
    CreditCard,
    ArrowRight
} from "lucide-react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        // Mock API call
        setTimeout(() => {
            setStatus("success");
            setEmail("");
            setTimeout(() => setStatus("idle"), 3000);
        }, 1500);
    };

    return (
        <footer className="bg-[#111111] text-white border-t border-neutral-800">
            {/* Top Section: Contact & Social */}
            <div className="border-b border-neutral-800">
                <div className="container mx-auto px-4 py-12">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                        {/* Brand & Contact */}
                        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                            <Link href="/" className="text-3xl font-bold tracking-tight">
                                LUXE<span className="text-primary">MART</span>
                            </Link>

                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                                    <Phone size={18} className="text-primary" />
                                    <span className="font-medium">+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                                    <Mail size={18} className="text-primary" />
                                    <span className="font-medium">support@luxemart.com</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex items-start gap-3 text-neutral-400 hover:text-white transition-colors max-w-xs">
                                    <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                                    <span className="font-medium">123 Luxury Ave, Fashion District, New York, NY 10001</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-all duration-300"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Section: Links */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: About */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 tracking-wider text-white uppercase">About Us</h4>
                        <ul className="space-y-4 text-neutral-400">
                            <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Shop */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 tracking-wider text-white uppercase">Shop</h4>
                        <ul className="space-y-4 text-neutral-400">
                            <li><Link href="/shop" className="hover:text-primary transition-colors">All Products</Link></li>
                            <li><Link href="/collections" className="hover:text-primary transition-colors">New Arrivals</Link></li>
                            <li><Link href="/accessories" className="hover:text-primary transition-colors">Accessories</Link></li>
                            <li><Link href="/sale" className="hover:text-primary transition-colors">Sale</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 tracking-wider text-white uppercase">Support</h4>
                        <ul className="space-y-4 text-neutral-400">
                            <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                            <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 tracking-wider text-white uppercase">Newsletter</h4>
                        <p className="text-neutral-400 mb-6 leading-relaxed">
                            Subscribe to receive updates, access to exclusive deals, and more.
                        </p>

                        {status === "success" ? (
                            <div className="bg-green-900/30 text-green-400 p-4 rounded-lg flex items-center gap-3 animate-in fade-in">
                                <CheckCircle size={20} />
                                <span className="font-medium">Subscribed!</span>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="relative">
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg pl-4 pr-12 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70"
                                >
                                    {status === "loading" ? (
                                        <Loader2 size={18} className="animate-spin" />
                                    ) : (
                                        <ArrowRight size={18} />
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Section: Copyright & Payment */}
            <div className="border-t border-neutral-800 bg-[#0a0a0a]">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-neutral-500 text-sm">
                            © {new Date().getFullYear()} LuxeMart. All rights reserved.
                        </p>

                        <div className="flex items-center gap-4">
                            <span className="text-neutral-500 text-sm hidden sm:block">We Accept:</span>
                            <div className="flex gap-2">
                                {/* Mock Payment Icons */}
                                {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((method) => (
                                    <div key={method} className="h-8 px-3 bg-white rounded flex items-center justify-center border border-neutral-200">
                                        <span className="text-[10px] font-bold text-neutral-900 uppercase tracking-tighter">{method}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
