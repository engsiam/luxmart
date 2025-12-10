"use client";

import { useState } from "react";
import { Search, Package, Truck, CheckCircle, MapPin } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function OrderTrackingPage() {
    const [orderId, setOrderId] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "searching" | "found" | "error">("idle");

    const handleTrack = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("searching");

        // Mock API call
        setTimeout(() => {
            if (orderId.length > 3) {
                setStatus("found");
            } else {
                setStatus("error");
            }
        }, 1500);
    };

    return (
        <div className="container mx-auto px-4 py-20 min-h-[70vh]">
            <ScrollReveal width="100%">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Track Your Order</h1>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            Enter your order ID and email address to see the current status of your shipment.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-lg border border-neutral-100 dark:border-neutral-800 mb-12">
                        <form onSubmit={handleTrack} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold mb-2">Order ID</label>
                                    <input
                                        type="text"
                                        required
                                        value={orderId}
                                        onChange={(e) => setOrderId(e.target.value)}
                                        placeholder="e.g. #12345"
                                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={status === "searching"}
                                className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                            >
                                {status === "searching" ? "Searching..." : (
                                    <>
                                        <Search size={20} /> Track Order
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {status === "error" && (
                        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-xl text-center animate-in fade-in slide-in-from-top-4">
                            Order not found. Please check your details and try again.
                        </div>
                    )}

                    {status === "found" && (
                        <div className="animate-in fade-in slide-in-from-bottom-8">
                            <div className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-lg border border-neutral-100 dark:border-neutral-800">
                                <div className="flex items-center justify-between mb-8 pb-8 border-b border-neutral-100 dark:border-neutral-800">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">Order #{orderId}</h3>
                                        <p className="text-neutral-500">Placed on Oct 12, 2025</p>
                                    </div>
                                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full font-bold text-sm">
                                        In Transit
                                    </span>
                                </div>

                                <div className="relative">
                                    {/* Progress Bar */}
                                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-800" />

                                    <div className="space-y-8">
                                        {[
                                            { icon: CheckCircle, title: "Order Confirmed", date: "Oct 12, 10:30 AM", active: true },
                                            { icon: Package, title: "Packed & Ready", date: "Oct 13, 02:15 PM", active: true },
                                            { icon: Truck, title: "Shipped", date: "Oct 13, 06:45 PM", active: true },
                                            { icon: MapPin, title: "Out for Delivery", date: "Estimated Oct 15", active: false },
                                        ].map((step, idx) => (
                                            <div key={idx} className="relative flex items-start gap-6">
                                                <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center border-4 ${step.active ? "bg-primary border-white dark:border-neutral-900 text-white" : "bg-neutral-100 dark:bg-neutral-800 border-white dark:border-neutral-900 text-neutral-400"}`}>
                                                    <step.icon size={24} />
                                                </div>
                                                <div className="pt-3">
                                                    <h4 className={`font-bold ${step.active ? "text-neutral-900 dark:text-white" : "text-neutral-400"}`}>{step.title}</h4>
                                                    <p className="text-sm text-neutral-500">{step.date}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </ScrollReveal>
        </div>
    );
}
