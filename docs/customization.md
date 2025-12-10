# Customization Guide

## Colors
To change the color scheme, open `src/app/globals.css` and modify the CSS variables in the `@theme` block.

```css
@theme {
  --color-primary: #0F172A; /* Main brand color */
  --color-accent: #FF6B6B;  /* Buttons, highlights */
  --color-secondary: #06B6D4; /* Secondary accents */
  /* ... */
}
```

## Fonts
We use `next/font/google` to load Inter and Poppins. To change fonts:
1. Open `src/app/layout.tsx`.
2. Import your desired font from `next/font/google`.
3. Update the `variable` and `className` in `RootLayout`.

## Logo
The logo is currently text-based in `src/components/common/Navbar.tsx` and `src/components/common/Footer.tsx`. Replace the text with an `<Image />` component to use your own logo file.

## Mock Data
All product and category data is located in `src/lib/mockData.ts`. You can edit this file to populate the store with your own sample data.
