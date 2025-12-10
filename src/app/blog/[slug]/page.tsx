import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="pb-20">
            {/* Hero Image */}
            <div className="relative h-[50vh] w-full">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50 flex items-end">
                    <div className="container mx-auto px-4 pb-12">
                        <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                            <ArrowLeft size={20} className="mr-2" />
                            Back to Blog
                        </Link>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-white/90">
                            <div className="flex items-center gap-2">
                                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white/10">
                                    <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                                </div>
                                <span className="font-medium">{post.author.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={18} />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={18} />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-8">
                    <ScrollReveal width="100%">
                        <div
                            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </ScrollReveal>

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-4">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span key={tag} className="bg-neutral-100 dark:bg-neutral-800 px-4 py-2 rounded-full text-sm font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-8">
                    {/* Share */}
                    <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800">
                        <h3 className="font-bold text-lg mb-4">Share this article</h3>
                        <div className="flex gap-2">
                            {['Twitter', 'Facebook', 'LinkedIn'].map((platform) => (
                                <button key={platform} className="flex-1 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors">
                                    {platform}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Related Posts */}
                    <div>
                        <h3 className="font-bold text-xl mb-6">Related Posts</h3>
                        <div className="space-y-6">
                            {blogPosts
                                .filter((p) => p.id !== post.id)
                                .slice(0, 3)
                                .map((relatedPost) => (
                                    <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group flex gap-4 items-start">
                                        <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                                            <Image src={relatedPost.image} alt={relatedPost.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold line-clamp-2 group-hover:text-primary transition-colors mb-2">
                                                {relatedPost.title}
                                            </h4>
                                            <span className="text-xs text-neutral-500">{relatedPost.date}</span>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </aside>
            </div>
        </article>
    );
}
