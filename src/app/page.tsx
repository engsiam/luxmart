"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroSlider from "@/components/features/HeroSlider";
import CollectionGrid from "@/components/features/CollectionGrid";
import PromoBanner from "@/components/features/PromoBanner";
import Newsletter from "@/components/features/Newsletter";
import ProductCard from "@/components/common/ProductCard";
import FlashSale from "@/components/features/FlashSale";
import TrendingCategories from "@/components/features/TrendingCategories";
import BrandMarquee from "@/components/features/BrandMarquee";
import FeaturesGrid from "@/components/features/FeaturesGrid";
import Testimonials from "@/components/features/Testimonials";
import ShopTheLook from "@/components/features/ShopTheLook";
import InstagramFeed from "@/components/features/InstagramFeed";
import { products } from "@/lib/mockData";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-0 overflow-hidden">
      {/* Hero Section */}
      <HeroSlider />

      {/* Brand Marquee */}
      <BrandMarquee />

      {/* Trending Categories */}
      <TrendingCategories />

      {/* Why Choose Us */}
      <FeaturesGrid />

      {/* Brand Story / Why Choose Us */}
      <section className="container mx-auto px-4 py-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
              alt="Our Studio"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold tracking-wider uppercase mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Crafting Excellence Since 2025</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              At LuxeMart, we believe that luxury lies in the details. Every piece in our collection is meticulously curated for its quality, sustainability, and timeless design.
            </p>

            <div className="flex gap-8 mb-8">
              <div>
                <h4 className="text-3xl font-bold text-primary mb-1">50k+</h4>
                <p className="text-sm text-neutral-500">Happy Customers</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary mb-1">100+</h4>
                <p className="text-sm text-neutral-500">Premium Brands</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary mb-1">4.9</h4>
                <p className="text-sm text-neutral-500 flex items-center gap-1">
                  Average Rating <Star size={12} className="fill-yellow-400 text-yellow-400" />
                </p>
              </div>
            </div>

            <Link href="/about" className="text-primary font-bold hover:underline flex items-center gap-2 text-lg group">
              Read Our Full Story <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Flash Sale Section */}
      <FlashSale />

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex items-end justify-between mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-wider uppercase mb-2 block">Shop</span>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Products</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/shop" className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline">
              View All <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/shop" className="inline-flex items-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">
            View All Products <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-10">
        <CollectionGrid />
      </section>

      {/* Promo Banner */}
      <PromoBanner />

      {/* Shop The Look */}
      <ShopTheLook />

      {/* Testimonials */}
      <Testimonials />

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
