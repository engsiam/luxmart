# LuxeMart - Premium E-commerce Frontend

A high-performance, production-grade e-commerce frontend built with Next.js 15, TypeScript, Tailwind CSS, and GSAP.

## Features
- **Modern Stack**: Next.js App Router, TypeScript, Tailwind CSS v4.
- **State Management**: Zustand with persistence for Cart and UI state.
- **Animations**: Premium GSAP animations (ScrollTrigger, Hover effects).
- **Responsive Design**: Mobile-first approach with a custom Cart Drawer.
- **Performance**: Optimized images, fonts, and code splitting.

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Colors & Fonts
Modify `src/app/globals.css` to change the CSS variables for colors and fonts.
- `--color-primary`: Main brand color.
- `--color-accent`: Accent color for buttons and highlights.
- `--font-sans`: Body font (Inter).
- `--font-heading`: Heading font (Poppins).

### Mock Data
Edit `src/lib/mockData.ts` to update products and categories.

## Folder Structure
- `src/app`: Pages and Layouts.
- `src/components`: Reusable UI components.
  - `common`: Global components (Navbar, Footer, ProductCard).
  - `features`: Feature-specific components (CartDrawer).
- `src/store`: Zustand stores.
- `src/lib`: Utilities and configurations.

## License
[Your License Here]
