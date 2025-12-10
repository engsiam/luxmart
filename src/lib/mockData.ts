import { Product, Category } from "@/types";

const curatedProducts: Product[] = [
    {
        id: "1",
        name: "The Voyager Weekender",
        slug: "voyager-weekender-leather",
        price: 395.00,
        description: "Crafted for the modern explorer, the Voyager Weekender is made from full-grain Italian vegetable-tanned leather that develops a rich patina over time. Features a dedicated shoe compartment, water-resistant lining, and solid brass hardware. Perfect for 3-day getaways.",
        images: [
            "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop"
        ],
        category: "accessories",
        tags: ["leather", "travel", "premium", "bag"],
        rating: 4.9,
        reviewsCount: 128,
        inStock: true,
    },
    {
        id: "2",
        name: "Chronos Minimalist Auto",
        slug: "chronos-minimalist-automatic-watch",
        price: 550.00,
        originalPrice: 695.00,
        description: "A tribute to Bauhaus design, the Chronos Minimalist features a Swiss automatic movement visible through the sapphire crystal caseback. The 40mm stainless steel case is paired with a genuine Horween leather strap. Water-resistant to 50m.",
        images: [
            "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1988&auto=format&fit=crop"
        ],
        category: "accessories",
        tags: ["watch", "automatic", "swiss", "men"],
        rating: 4.8,
        reviewsCount: 84,
        inStock: true,
    },
    {
        id: "3",
        name: "SonicPro Noise-Cancelling",
        slug: "sonicpro-noise-cancelling-headphones",
        price: 349.00,
        description: "Immerse yourself in pure audio bliss. The SonicPro headphones feature industry-leading active noise cancellation, 30-hour battery life, and custom-tuned 40mm drivers for deep bass and crystal-clear highs. Plush memory foam earcups ensure all-day comfort.",
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1968&auto=format&fit=crop"
        ],
        category: "electronics",
        tags: ["audio", "wireless", "tech", "anc"],
        rating: 4.7,
        reviewsCount: 342,
        inStock: true,
    },
    {
        id: "4",
        name: "Merino Wool Essential Tee",
        slug: "merino-wool-essential-tee",
        price: 85.00,
        description: "Nature's technical fabric. Our Merino Wool Tee is breathable, moisture-wicking, and odor-resistant. Sourced ethically from New Zealand, it's the perfect base layer for travel, hiking, or everyday luxury. Machine washable.",
        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop"
        ],
        category: "clothing",
        tags: ["wool", "merino", "basics", "sustainable"],
        rating: 4.6,
        reviewsCount: 215,
        inStock: true,
        variants: [
            { id: "v1", name: "Size", options: ["S", "M", "L", "XL"] },
            { id: "v2", name: "Color", options: ["Charcoal", "Navy", "Black"] },
        ],
    },
    {
        id: "5",
        name: "Apex Performance Runner",
        slug: "apex-performance-runner",
        price: 160.00,
        description: "Engineered for speed and stability. The Apex Runner features a responsive foam midsole, breathable knit upper, and a carbon fiber plate for maximum energy return. Designed for marathon training and race day.",
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop"
        ],
        category: "clothing",
        tags: ["shoes", "running", "sport", "performance"],
        rating: 4.9,
        reviewsCount: 56,
        inStock: true,
        variants: [
            { id: "v1", name: "Size", options: ["8", "9", "10", "11", "12"] },
        ],
    },
    {
        id: "6",
        name: "Lumina Smart Lamp",
        slug: "lumina-smart-lamp",
        price: 129.00,
        description: "Transform your space with the Lumina Smart Lamp. Features 16 million colors, app control, voice assistant compatibility, and a sleek aluminum design. Perfect for setting the mood or boosting productivity.",
        images: [
            "https://images.unsplash.com/photo-1507473888900-52e1adad5452?q=80&w=1973&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1540932296-ac5f6a34bc95?q=80&w=1974&auto=format&fit=crop"
        ],
        category: "electronics",
        tags: ["smart home", "lighting", "tech", "decor"],
        rating: 4.5,
        reviewsCount: 92,
        inStock: true,
    },
    {
        id: "7",
        name: "Heritage Denim Jacket",
        slug: "heritage-denim-jacket",
        price: 145.00,
        description: "A timeless classic. Our Heritage Denim Jacket is made from 14oz Japanese selvedge denim. It features vintage copper buttons, contrast stitching, and a tailored fit that looks great over a tee or a button-down.",
        images: [
            "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=2069&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1974&auto=format&fit=crop"
        ],
        category: "clothing",
        tags: ["denim", "jacket", "vintage", "style"],
        rating: 4.7,
        reviewsCount: 180,
        inStock: true,
        variants: [
            { id: "v1", name: "Size", options: ["S", "M", "L", "XL"] },
        ],
    },
    {
        id: "8",
        name: "Nomad Roll-Top Backpack",
        slug: "nomad-roll-top-backpack",
        price: 110.00,
        description: "Built for the urban commute. The Nomad Roll-Top is water-resistant, durable, and expandable. Features a padded laptop sleeve, magnetic buckles, and ergonomic shoulder straps.",
        images: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1974&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=1974&auto=format&fit=crop"
        ],
        category: "accessories",
        tags: ["backpack", "commute", "tech", "bag"],
        rating: 4.6,
        reviewsCount: 210,
        inStock: true,
    },
    {
        id: "9",
        name: "Studio Pro Wireless",
        slug: "studio-pro-wireless",
        price: 299.00,
        description: "Professional grade wireless headphones with high-fidelity audio and deep bass.",
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=2070&auto=format&fit=crop"
        ],
        category: "Headphones",
        tags: ["audio", "wireless", "music"],
        rating: 4.8,
        reviewsCount: 150,
        inStock: true,
    },
    {
        id: "10",
        name: "Series 7 Smart Watch",
        slug: "series-7-smart-watch",
        price: 399.00,
        description: "Stay connected and healthy with the latest Series 7 Smart Watch. Features ECG, blood oxygen monitoring, and always-on display.",
        images: [
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop"
        ],
        category: "Smart Watches",
        tags: ["tech", "wearable", "fitness"],
        rating: 4.9,
        reviewsCount: 230,
        inStock: true,
    },
    {
        id: "11",
        name: "DSLR Pro Camera",
        slug: "dslr-pro-camera",
        price: 1299.00,
        description: "Capture life's moments in stunning detail with our DSLR Pro Camera. 24MP sensor, 4K video, and fast autofocus.",
        images: [
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop"
        ],
        category: "Cameras",
        tags: ["photography", "camera", "tech"],
        rating: 4.7,
        reviewsCount: 89,
        inStock: true,
    },
    {
        id: "12",
        name: "Leather Crossbody Bag",
        slug: "leather-crossbody-bag",
        price: 120.00,
        description: "Minimalist leather crossbody bag for your daily essentials.",
        images: [
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1974&auto=format&fit=crop"
        ],
        category: "Accessories",
        tags: ["fashion", "bag", "leather"],
        rating: 4.5,
        reviewsCount: 45,
        inStock: true,
    },
    {
        id: "13",
        name: "Aviator Sunglasses",
        slug: "aviator-sunglasses",
        price: 150.00,
        description: "Classic aviator style sunglasses with polarized lenses.",
        images: [
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2080&auto=format&fit=crop"
        ],
        category: "Accessories",
        tags: ["fashion", "sunglasses", "summer"],
        rating: 4.6,
        reviewsCount: 112,
        inStock: true,
    }
];

// Helper to generate random products
const generateProducts = (count: number): Product[] => {
    const categories = ["Accessories", "Electronics", "Clothing", "Home & Living", "Headphones", "Smart Watches", "Cameras"];
    const adjectives = ["Premium", "Modern", "Classic", "Urban", "Essential", "Luxury", "Smart", "Eco", "Vintage", "Sleek"];
    const nouns = ["Bag", "Watch", "Headphones", "T-Shirt", "Jacket", "Lamp", "Sneakers", "Wallet", "Speaker", "Desk", "Camera", "Lens"];
    const images = [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2080&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1974&auto=format&fit=crop"
    ];

    return Array.from({ length: count }).map((_, i) => {
        const category = categories[Math.floor(Math.random() * categories.length)];
        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        const name = `${adj} ${noun} ${i + 14}`;

        return {
            id: (i + 14).toString(),
            name,
            slug: name.toLowerCase().replace(/ /g, "-"),
            price: Math.floor(Math.random() * 400) + 50,
            description: `This is a generated description for the ${name}. It features high-quality materials and a design that fits perfectly into your lifestyle.`,
            images: [images[Math.floor(Math.random() * images.length)]],
            category,
            tags: [category, "generated", "new"],
            rating: Number((Math.random() * 2 + 3).toFixed(1)),
            reviewsCount: Math.floor(Math.random() * 500),
            inStock: Math.random() > 0.1,
            variants: Math.random() > 0.5 ? [
                { id: "v1", name: "Color", options: ["Black", "White", "Blue"] }
            ] : undefined
        };
    });
};

export const products: Product[] = [...curatedProducts, ...generateProducts(92)];

export const categories: Category[] = [
    {
        id: "c1",
        name: "Accessories",
        slug: "accessories",
        description: "Elevate your daily carry with premium leather goods and timepieces.",
        image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: "c2",
        name: "Electronics",
        slug: "electronics",
        description: "Cutting-edge technology for the modern lifestyle.",
        image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2001&auto=format&fit=crop",
    },
    {
        id: "c3",
        name: "Clothing",
        slug: "clothing",
        description: "Timeless fashion essentials crafted from sustainable materials.",
        image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: "c4",
        name: "Home & Living",
        slug: "home-living",
        description: "Curated items for a stylish and comfortable home.",
        image: "https://images.unsplash.com/photo-1513506003013-d531628af69d?q=80&w=1974&auto=format&fit=crop",
    }
];
