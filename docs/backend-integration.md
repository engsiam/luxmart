# Backend Integration Guide

This template is designed to be backend-agnostic. Currently, it uses mock data from `src/lib/mockData.ts` and local storage for the cart.

## Connecting to an API

1. **Products**: Replace the `products` import in pages with an async data fetch.
   ```typescript
   // src/app/shop/page.tsx
   async function getProducts() {
     const res = await fetch('https://api.yourstore.com/products');
     return res.json();
   }
   
   export default async function ShopPage() {
     const products = await getProducts();
     // ...
   }
   ```

2. **Cart**: Update `src/store/useCartStore.ts` to sync with your backend.
   - Use `useEffect` or middleware to call your API when cart items change.
   - Or keep using local storage and sync only at checkout.

3. **Checkout**: Update `src/app/checkout/page.tsx` to submit the order to your API.
   ```typescript
   const handleSubmit = async (e) => {
     e.preventDefault();
     const res = await fetch('/api/checkout', {
       method: 'POST',
       body: JSON.stringify({ items, address }),
     });
     // ...
   };
   ```

## Authentication
Implement your auth logic (e.g., NextAuth.js) and update `src/store/useUIStore.ts` or create a new `useAuthStore` to manage user sessions.
