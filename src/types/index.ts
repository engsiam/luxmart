export interface Product {
    id: string;
    name: string;
    slug: string;
    price: number;
    originalPrice?: number;
    description: string;
    images: string[];
    category: string;
    tags: string[];
    variants?: ProductVariant[];
    rating: number;
    reviewsCount: number;
    inStock: boolean;
}

export interface ProductVariant {
    id: string;
    name: string;
    options: string[]; // e.g., ["S", "M", "L"] or ["Red", "Blue"]
    priceModifier?: number;
}

export interface CartItem extends Product {
    cartId: string; // unique id for cart item (product id + variant)
    quantity: number;
    selectedVariant?: {
        name: string;
        option: string;
    };
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    image: string;
    description?: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: "user" | "admin";
}
