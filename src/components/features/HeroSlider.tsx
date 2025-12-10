"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { products, categories } from "@/lib/mockData";

const slides = [
    ...products.slice(0, 3).map((product, index) => ({
        id: index + 1,
        title: product.name,
        subtitle: "Featured Product",
        description: product.description,
        image: product.images[0],
        cta: "Shop Now",
        link: `/product/${product.slug}`,
    })),
    ...categories.slice(0, 2).map((category, index) => ({
        id: products.length + index + 1,
        title: category.name,
        subtitle: "Shop Collection",
        description: category.description || `Explore our ${category.name} collection.`,
        image: category.image,
        cta: "View Collection",
        link: `/shop?category=${category.slug}`,
    })),
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 8000); // Slower interval for premium feel
        return () => clearInterval(interval);
    }, [currentSlide]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            zIndex: 0,
            pointerEvents: "none" as const
        }),
        center: {
            zIndex: 30,
            x: 0,
            opacity: 1,
            pointerEvents: "auto" as const
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            pointerEvents: "none" as const
        })
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.2, duration: 0.8 }
        })
    };

    return (
        <div className="relative h-[90vh] w-full overflow-hidden bg-neutral-900 text-white">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.5 }
                    }}
                    className="absolute inset-0"
                >
                    {/* Background Image with Ken Burns Effect */}
                    <motion.div
                        className="absolute inset-0"
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, ease: "linear" }}
                    >
                        <Image
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].title}
                            fill
                            className="object-cover opacity-60"
                            priority
                            quality={90}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-30 container mx-auto px-4 h-full flex items-center pointer-events-none">
                        <div className="max-w-3xl pointer-events-auto">
                            <motion.span
                                custom={1}
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                className="inline-block px-4 py-1 rounded-full text-sm font-bold uppercase tracking-[0.2em] mb-6 bg-white/10 backdrop-blur-md border border-white/20 text-white"
                            >
                                {slides[currentSlide].subtitle}
                            </motion.span>

                            <motion.h1
                                custom={2}
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                className="text-5xl md:text-8xl font-bold leading-tight mb-6 tracking-tight"
                            >
                                {slides[currentSlide].title}
                            </motion.h1>

                            <motion.p
                                custom={3}
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                className="text-lg md:text-xl text-neutral-300 mb-10 max-w-xl leading-relaxed font-light"
                            >
                                {slides[currentSlide].description}
                            </motion.p>

                            <motion.div
                                custom={4}
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex gap-4"
                            >
                                <Link
                                    href={slides[currentSlide].link}
                                    className="group bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-neutral-200 transition-all flex items-center gap-2 relative z-20"
                                >
                                    {slides[currentSlide].cta}
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                </Link>
                                <Link
                                    href={slides[currentSlide].link}
                                    className="px-8 py-4 rounded-full font-bold border border-white/30 hover:bg-white/10 transition-all text-white backdrop-blur-sm relative z-20"
                                >
                                    View Details
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute bottom-12 right-12 z-20 flex gap-4">
                <button
                    onClick={prevSlide}
                    className="p-4 rounded-full border border-white/10 bg-black/20 hover:bg-white/20 transition-all backdrop-blur-md text-white group"
                >
                    <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-4 rounded-full border border-white/10 bg-black/20 hover:bg-white/20 transition-all backdrop-blur-md text-white group"
                >
                    <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
            </div>

            {/* Progress/Indicators */}
            <div className="absolute bottom-12 left-12 z-20 flex gap-4 items-center">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentSlide ? 1 : -1);
                            setCurrentSlide(idx);
                        }}
                        className="group relative py-2"
                    >
                        <div className={`h-[2px] w-12 transition-all duration-500 ${idx === currentSlide ? "bg-white w-20" : "bg-white/30 group-hover:bg-white/60"
                            }`} />
                    </button>
                ))}
            </div>
        </div>
    );
}
