"use client";

import { useCartStore } from "@/store/useCartStore";
import { useAuthStore } from "@/store/useAuthStore";
import { useState, useEffect } from "react";
import { CheckCircle, Loader2, ArrowRight, ShieldCheck, CreditCard } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CheckoutPage() {
    const { items, total, clearCart } = useCartStore();
    const { user, updateProfile, login, isAuthenticated } = useAuthStore();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    // Form State
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
    });

    // Pre-fill form if user is logged in
    useEffect(() => {
        if (user) {
            const [firstName, ...lastNameParts] = user.name.split(" ");
            setFormData((prev) => ({
                ...prev,
                email: user.email,
                firstName: firstName || "",
                lastName: lastNameParts.join(" ") || "",
            }));
        }
    }, [user]);

    // Redirect if cart is empty
    useEffect(() => {
        if (items.length === 0 && !isSuccess) {
            router.push("/cart");
        }
    }, [items, isSuccess, router]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Mock API call
        setTimeout(() => {
            // Update profile if authenticated
            if (isAuthenticated) {
                updateProfile({
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                });
            } else {
                // Auto-login / Create account for guest
                login(formData.email);
                updateProfile({
                    name: `${formData.firstName} ${formData.lastName}`,
                });
            }

            setIsLoading(false);
            setIsSuccess(true);
            clearCart();
        }, 2000);
    };

    if (isSuccess) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center container mx-auto px-4 text-center">
                <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-8 animate-in zoom-in duration-500">
                    <CheckCircle size={48} />
                </div>
                <h1 className="text-4xl font-bold mb-4">Order Confirmed!</h1>
                <p className="text-neutral-500 dark:text-neutral-400 mb-8 max-w-md mx-auto text-lg">
                    Thank you for your purchase, <span className="font-bold text-neutral-900 dark:text-white">{formData.firstName}</span>! Your order <span className="font-mono font-bold text-neutral-900 dark:text-white">#12345</span> has been confirmed and will be shipped to {formData.city} shortly.
                </p>
                <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25">
                    Continue Shopping <ArrowRight size={20} />
                </Link>
            </div>
        );
    }

    if (items.length === 0) {
        return null; // Will redirect via useEffect
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center md:text-left">Checkout</h1>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Form */}
                <div className="flex-1">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Contact Info */}
                        <section className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">1</span>
                                Contact Information
                            </h2>
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-neutral-600 dark:text-neutral-400">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-transparent transition-all"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Shipping Address */}
                        <section className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">2</span>
                                Shipping Address
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-neutral-600 dark:text-neutral-400">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-transparent transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-neutral-600 dark:text-neutral-400">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-transparent transition-all"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium mb-2 text-neutral-600 dark:text-neutral-400">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        required
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-transparent transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-neutral-600 dark:text-neutral-400">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        required
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-transparent transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-neutral-600 dark:text-neutral-400">Postal Code</label>
                                    <input
                                        type="text"
                                        name="postalCode"
                                        required
                                        value={formData.postalCode}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-transparent transition-all"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Payment (Mock) */}
                        <section className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">3</span>
                                Payment
                            </h2>
                            <div className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 flex items-center gap-4 mb-4">
                                <div className="p-2 bg-white dark:bg-neutral-800 rounded-lg shadow-sm">
                                    <CreditCard size={24} className="text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium">Secure Payment</p>
                                    <p className="text-sm text-neutral-500">All transactions are secure and encrypted.</p>
                                </div>
                            </div>
                            <div className="p-4 border border-blue-100 dark:border-blue-900/30 bg-blue-50 dark:bg-blue-900/10 rounded-xl text-sm text-blue-700 dark:text-blue-300 flex items-start gap-3">
                                <ShieldCheck size={20} className="flex-shrink-0 mt-0.5" />
                                <p>This is a demo store. No actual payment processing will occur. You can proceed safely.</p>
                            </div>
                        </section>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all hover:scale-[1.01] active:scale-[0.99] text-lg shadow-lg shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 size={24} className="animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                <>
                                    Place Order <ArrowRight size={24} />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Order Summary */}
                <div className="w-full lg:w-96 flex-shrink-0">
                    <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-lg sticky top-24">
                        <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                        <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                            {items.map((item) => (
                                <div key={item.cartId} className="flex gap-4">
                                    <div className="relative w-16 h-16 bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden flex-shrink-0">
                                        {item.images[0] && (
                                            <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-medium text-sm truncate">{item.name}</h4>
                                        <p className="text-xs text-neutral-500">Qty: {item.quantity}</p>
                                        <p className="text-sm font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-3 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                            <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                                <span>Subtotal</span>
                                <span>${total().toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                                <span>Shipping</span>
                                <span className="text-green-600 font-medium">Free</span>
                            </div>
                            <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                                <span>Tax</span>
                                <span>$0.00</span>
                            </div>
                            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex justify-between items-center">
                                <span className="font-bold text-lg">Total</span>
                                <span className="font-bold text-2xl text-primary">${total().toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
