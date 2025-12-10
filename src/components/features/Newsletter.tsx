"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        // Mock API call
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <section className="bg-neutral-50 dark:bg-neutral-900 py-20 mt-20">
            <div className="container mx-auto px-4 text-center max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-lg">
                    Subscribe to our newsletter for early access to new drops, exclusive offers, and style inspiration.
                </p>

                {status === "success" ? (
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-6 rounded-2xl flex flex-col items-center animate-in zoom-in duration-300">
                        <CheckCircle size={48} className="mb-4" />
                        <h3 className="text-xl font-bold mb-2">You're on the list!</h3>
                        <p>Thank you for subscribing.</p>
                        <button
                            onClick={() => setStatus("idle")}
                            className="mt-6 text-sm font-bold underline hover:no-underline"
                        >
                            Subscribe another email
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
                        <input
                            type="email"
                            required
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={status === "loading"}
                            className="w-full pl-6 pr-36 py-4 rounded-full border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-white dark:bg-neutral-800 transition-all shadow-sm"
                        />
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="absolute right-2 top-2 bottom-2 bg-primary text-white px-6 rounded-full font-bold hover:bg-primary/90 transition-all hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {status === "loading" ? (
                                <Loader2 size={18} className="animate-spin" />
                            ) : (
                                <>
                                    Subscribe <Send size={18} />
                                </>
                            )}
                        </button>
                    </form>
                )}

                <p className="mt-6 text-xs text-neutral-500">
                    By subscribing, you agree to our Privacy Policy and Terms of Service.
                </p>
            </div>
        </section>
    );
}
