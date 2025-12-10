"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Package, User, LogOut, MapPin, CreditCard, Settings } from "lucide-react";

export default function AccountPage() {
    const { user, isAuthenticated, logout } = useAuthStore();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("orders");

    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/login");
        }
    }, [isAuthenticated, router]);

    if (!user) return null;

    const tabs = [
        { id: "orders", label: "My Orders", icon: Package },
        { id: "profile", label: "Profile Settings", icon: User },
        { id: "addresses", label: "Addresses", icon: MapPin },
        { id: "payment", label: "Payment Methods", icon: CreditCard },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <aside className="w-full md:w-64 flex-shrink-0">
                    <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-100 dark:border-neutral-800 shadow-sm sticky top-24">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-100">
                                {user.avatar && (
                                    <Image src={user.avatar} alt={user.name} fill className="object-cover" />
                                )}
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">{user.name}</h3>
                                <p className="text-xs text-neutral-500 truncate max-w-[120px]">{user.email}</p>
                            </div>
                        </div>

                        <nav className="space-y-1">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === tab.id
                                            ? "bg-primary text-white shadow-lg shadow-primary/25"
                                            : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                                        }`}
                                >
                                    <tab.icon size={18} />
                                    {tab.label}
                                </button>
                            ))}
                            <hr className="my-4 border-neutral-100 dark:border-neutral-800" />
                            <button
                                onClick={() => {
                                    logout();
                                    router.push("/");
                                }}
                                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                            >
                                <LogOut size={18} />
                                Sign Out
                            </button>
                        </nav>
                    </div>
                </aside>

                {/* Content */}
                <main className="flex-1">
                    {activeTab === "orders" && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold">Order History</h2>
                            {/* Mock Orders */}
                            {[1, 2].map((order) => (
                                <div key={order} className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800 overflow-hidden shadow-sm">
                                    <div className="p-6 border-b border-neutral-100 dark:border-neutral-800 flex flex-wrap gap-4 justify-between items-center bg-neutral-50/50 dark:bg-neutral-800/50">
                                        <div className="flex gap-8">
                                            <div>
                                                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Order Placed</p>
                                                <p className="font-medium text-sm">December {order}, 2025</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Total</p>
                                                <p className="font-medium text-sm">$199.00</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Order #</p>
                                                <p className="font-medium text-sm">12345-{order}</p>
                                            </div>
                                        </div>
                                        <button className="text-primary text-sm font-medium hover:underline">View Invoice</button>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-20 h-20 bg-neutral-100 rounded-lg overflow-hidden">
                                                <Image
                                                    src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop"
                                                    alt="Product"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-bold">Premium Leather Backpack</h4>
                                                <p className="text-sm text-neutral-500 mb-2">Quantity: 1</p>
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                                    Delivered
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "profile" && (
                        <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800 p-8 shadow-sm">
                            <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
                            <form className="space-y-6 max-w-lg">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">First Name</label>
                                        <input type="text" defaultValue="John" className="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-transparent" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">Last Name</label>
                                        <input type="text" defaultValue="Doe" className="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-transparent" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email Address</label>
                                    <input type="email" defaultValue={user.email} disabled className="w-full px-4 py-3 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-neutral-50 dark:bg-neutral-800 text-neutral-500 cursor-not-allowed" />
                                </div>
                                <button type="button" className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors">
                                    Save Changes
                                </button>
                            </form>
                        </div>
                    )}

                    {(activeTab === "addresses" || activeTab === "payment") && (
                        <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800 p-12 text-center shadow-sm">
                            <Settings className="mx-auto text-neutral-300 mb-4" size={48} />
                            <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
                            <p className="text-neutral-500">This section is under development.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
