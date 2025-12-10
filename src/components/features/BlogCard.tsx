"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/blogData";

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <article className="group gradient-border-card shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full">
            <Link href={`/blog/${post.slug}`} className="relative aspect-video overflow-hidden block">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                    {post.tags.map((tag) => (
                        <span key={tag} className="bg-white/90 dark:bg-black/80 backdrop-blur-sm text-xs font-bold px-2 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </Link>

            <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4">
                    <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                    </div>
                </div>

                <Link href={`/blog/${post.slug}`} className="block mb-3">
                    <h2 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                    </h2>
                </Link>

                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-neutral-100 dark:border-neutral-800">
                    <div className="flex items-center gap-3">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden bg-neutral-100">
                            <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                        </div>
                        <span className="text-sm font-medium">{post.author.name}</span>
                    </div>

                    <Link href={`/blog/${post.slug}`} className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                        Read More <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </article>
    );
}
