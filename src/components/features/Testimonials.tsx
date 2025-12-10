"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Fashion Blogger",
        // Using a more lifestyle/portrait oriented image
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
        content: "LuxeMart has completely transformed my shopping experience. The quality of the products is unmatched, and the customer service is simply outstanding. Every item feels like a curated piece of art.",
        rating: 5
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Tech Enthusiast",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
        content: "I bought the noise-cancelling headphones and they are a game changer. The attention to detail in packaging and the speed of delivery blew me away. Highly recommended for anyone seeking quality.",
        rating: 5
    },
    {
        id: 3,
        name: "Emma Wilson",
        role: "Interior Designer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
        content: "The home decor collection is exquisite. I found unique pieces that perfectly match my style. It's rare to find an online store that balances aesthetic appeal with genuine product quality so well.",
        rating: 4
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextTestimonial = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const interval = setInterval(nextTestimonial, 8000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const variants = {
        enter: (direction: number) => ({
            opacity: 0,
            x: direction > 0 ? 50 : -50,
        }),
        center: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
            }
        },
        exit: (direction: number) => ({
            opacity: 0,
            x: direction < 0 ? 50 : -50,
            transition: {
                duration: 0.5,
                ease: "easeIn" as const
            }
        })
    };

    const imageVariants = {
        enter: (direction: number) => ({
            opacity: 0,
            scale: 1.1,
        }),
        center: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeOut" as const
            }
        },
        exit: (direction: number) => ({
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.5,
                ease: "easeIn" as const
            }
        })
    };

    return (
        <section className="py-24 bg-neutral-950 text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <ScrollReveal width="100%">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Image Section */}
                        <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={imageVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Controls Overlay on Image - Mobile/Desktop */}
                            <div className="absolute bottom-6 left-6 flex gap-4 z-20">
                                <button
                                    onClick={prevTestimonial}
                                    className="p-3 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full text-white border border-white/20 transition-all"
                                    aria-label="Previous"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    className="p-3 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full text-white border border-white/20 transition-all"
                                    aria-label="Next"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="w-full lg:w-1/2 relative lg:py-12">
                            <div className="mb-12">
                                <span className="text-primary font-bold tracking-widest uppercase mb-4 block text-sm">Testimonials</span>
                                <h2 className="text-4xl md:text-5xl font-bold leading-tight">What Our Clients Say</h2>
                            </div>

                            <div className="relative min-h-[300px]">
                                <AnimatePresence mode="wait" custom={direction}>
                                    <motion.div
                                        key={currentIndex}
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        className="absolute inset-0"
                                    >
                                        <div className="relative">
                                            <Quote className="text-white/20 w-16 h-16 mb-8 transform -scale-x-100" />

                                            <div className="flex gap-1 mb-8">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={20}
                                                        fill={i < testimonials[currentIndex].rating ? "#eab308" : "none"}
                                                        className={i < testimonials[currentIndex].rating ? "text-yellow-500" : "text-neutral-700"}
                                                    />
                                                ))}
                                            </div>

                                            <p className="text-2xl md:text-3xl leading-relaxed font-light mb-10 text-neutral-200">
                                                "{testimonials[currentIndex].content}"
                                            </p>

                                            <div>
                                                <h4 className="text-2xl font-bold mb-2">{testimonials[currentIndex].name}</h4>
                                                <p className="text-neutral-400 font-medium">{testimonials[currentIndex].role}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Progress Bar */}
                            <div className="flex gap-3 mt-8 absolute bottom-0 lg:-bottom-12">
                                {testimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            setDirection(idx > currentIndex ? 1 : -1);
                                            setCurrentIndex(idx);
                                        }}
                                        className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentIndex
                                                ? "w-12 bg-white"
                                                : "w-4 bg-neutral-700 hover:bg-neutral-600"
                                            }`}
                                        aria-label={`Go to testimonial ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
