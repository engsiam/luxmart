import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const collections = [
    {
        id: 1,
        title: "Summer Essentials",
        description: "Lightweight fabrics and vibrant colors for the season.",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop",
        link: "/shop?collection=summer",
        size: "large"
    },
    {
        id: 2,
        title: "Urban Minimalist",
        description: "Clean lines and monochromatic tones for city living.",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop",
        link: "/shop?collection=urban",
        size: "small"
    },
    {
        id: 3,
        title: "Tech Accessories",
        description: "Upgrade your daily carry with premium gadgets.",
        image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2001&auto=format&fit=crop",
        link: "/shop?collection=tech",
        size: "small"
    },
    {
        id: 4,
        title: "Home & Living",
        description: "Curated pieces to elevate your living space.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop",
        link: "/shop?collection=home",
        size: "medium"
    },
    {
        id: 5,
        title: "Travel Gear",
        description: "Durable and stylish companions for your adventures.",
        image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1887&auto=format&fit=crop",
        link: "/shop?collection=travel",
        size: "medium"
    }
];

export default function CollectionsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Curated Collections</h1>
                <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                    Explore our thoughtfully assembled collections, designed to inspire and elevate every aspect of your lifestyle.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
                {collections.map((collection, idx) => (
                    <Link
                        key={collection.id}
                        href={collection.link}
                        className={`group gradient-border-card ${collection.size === "large" ? "md:col-span-2 lg:col-span-2" : ""
                            }`}
                    >
                        <div className="relative w-full h-full rounded-[inherit] overflow-hidden">
                            <Image
                                src={collection.image}
                                alt={collection.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <h2 className="text-3xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {collection.title}
                                </h2>
                                <p className="text-neutral-200 mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 max-w-md">
                                    {collection.description}
                                </p>
                                <div className="flex items-center gap-2 text-white font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                                    Explore Collection <ArrowRight size={20} />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
