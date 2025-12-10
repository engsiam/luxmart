"use client";

import { blogPosts } from "@/lib/blogData";
import BlogCard from "@/components/features/BlogCard";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <ScrollReveal width="100%">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
                        Stories, tips, and insights on lifestyle, fashion, and technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <div key={post.id} style={{ transitionDelay: `${index * 100}ms` }}>
                            <BlogCard post={post} />
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </div>
    );
}
