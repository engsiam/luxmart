export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image: string;
    author: {
        name: string;
        avatar: string;
    };
    date: string;
    readTime: string;
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "The Art of Minimalist Living",
        slug: "art-of-minimalist-living",
        excerpt: "Discover how decluttering your space can lead to a clearer mind and a more focused life.",
        content: `
            <p>Minimalism isn't just about having less stuff. It's about making room for more of what matters. In a world that constantly screams for our attention, minimalism offers a quiet refuge.</p>
            <h2>Why Minimalism?</h2>
            <p>By reducing the physical clutter in our lives, we often find that our mental clutter decreases as well. We spend less time cleaning, organizing, and looking for things, and more time doing what we love.</p>
            <h2>Getting Started</h2>
            <p>Start small. Pick one area of your home—a drawer, a shelf, a corner—and clear it out. Ask yourself: Does this item spark joy? Is it useful? If not, let it go.</p>
            <p>Remember, minimalism is a journey, not a destination. It's about intentionality.</p>
        `,
        image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop",
        author: {
            name: "Sarah Jenkins",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
        },
        date: "Oct 12, 2025",
        readTime: "5 min read",
        tags: ["Lifestyle", "Minimalism", "Design"]
    },
    {
        id: "2",
        title: "Sustainable Fashion: A Guide",
        slug: "sustainable-fashion-guide",
        excerpt: "How to build a wardrobe that looks good and does good for the planet.",
        content: `
            <p>Fast fashion comes at a high cost to the environment. But building a sustainable wardrobe doesn't mean sacrificing style.</p>
            <h2>Choose Quality Over Quantity</h2>
            <p>Invest in well-made pieces that will last for years, not just a season. Look for natural fibers like organic cotton, linen, and wool.</p>
            <h2>Thrifting and Vintage</h2>
            <p>One of the most sustainable ways to shop is to buy second-hand. You give clothes a second life and keep them out of landfills.</p>
        `,
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop",
        author: {
            name: "Michael Chen",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
        },
        date: "Oct 08, 2025",
        readTime: "4 min read",
        tags: ["Fashion", "Sustainability", "Eco-friendly"]
    },
    {
        id: "3",
        title: "Top 10 Travel Essentials for 2025",
        slug: "top-travel-essentials-2025",
        excerpt: "Pack smarter, travel lighter. Here are the must-have items for your next adventure.",
        content: `
            <p>Traveling is about the experience, not the baggage. Here are our top picks for travel gear that will make your trip smoother.</p>
            <h2>1. The Perfect Carry-On</h2>
            <p>A durable, lightweight carry-on is essential. Look for one with 360-degree wheels and a TSA-approved lock.</p>
            <h2>2. Noise-Cancelling Headphones</h2>
            <p>Block out the engine drone and arrive refreshed. Our SonicPro headphones are a traveler favorite.</p>
        `,
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
        author: {
            name: "Emma Wilson",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
        },
        date: "Sep 28, 2025",
        readTime: "6 min read",
        tags: ["Travel", "Gear", "Tips"]
    },
    {
        id: "4",
        title: "The Future of Smart Homes",
        slug: "future-of-smart-homes",
        excerpt: "From voice-activated lights to AI-powered security, see what's next in home automation.",
        content: `
            <p>Smart homes are no longer science fiction. They are here, and they are making our lives easier and more efficient.</p>
            <h2>Integration is Key</h2>
            <p>The future is about seamless integration. Your lights, thermostat, and security system working together to create the perfect environment.</p>
        `,
        image: "https://images.unsplash.com/photo-1558002038-1091a166111c?q=80&w=2070&auto=format&fit=crop",
        author: {
            name: "David Kim",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
        },
        date: "Sep 15, 2025",
        readTime: "7 min read",
        tags: ["Tech", "Smart Home", "Innovation"]
    }
];
