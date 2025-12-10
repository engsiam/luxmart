"use client";

import { useState, useEffect } from "react";
import { X, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NewsletterPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        // Check if already subscribed or dismissed
        const hasSeenPopup = localStorage.getItem("newsletterPopupSeen");
        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 5000); // Show after 5 seconds
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem("newsletterPopupSeen", "true");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            handleClose();
        }, 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative"
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors z-10"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                                <Mail size={32} />
                            </div>

                            {!submitted ? (
                                <>
                                    <h2 className="text-2xl font-bold mb-2">Get 10% Off</h2>
                                    <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                                        Subscribe to our newsletter and get 10% off your first purchase. Plus, get early access to sales.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary"
                                        />
                                        <button
                                            type="submit"
                                            className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors"
                                        >
                                            Subscribe Now
                                        </button>
                                    </form>
                                    <button onClick={handleClose} className="mt-4 text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 underline">
                                        No thanks, I prefer paying full price
                                    </button>
                                </>
                            ) : (
                                <div className="py-8">
                                    <h3 className="text-2xl font-bold text-green-600 mb-2">You're Subscribed!</h3>
                                    <p className="text-neutral-600 dark:text-neutral-400">
                                        Check your inbox for your discount code.
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
