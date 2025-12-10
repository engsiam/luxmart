import { render, screen } from '@testing-library/react'
import ProductCard from '@/components/common/ProductCard'
import { products } from '@/lib/mockData'

// Mock GSAP to avoid animation errors in tests
jest.mock('@/lib/gsap', () => ({
    __esModule: true,
    default: {
        context: (func: any) => {
            func();
            return { revert: jest.fn() };
        },
        to: jest.fn(),
        set: jest.fn(),
        timeline: () => ({
            from: jest.fn().mockReturnThis(),
        }),
        registerPlugin: jest.fn(),
    },
}));

// Mock useCartStore
jest.mock('@/store/useCartStore', () => ({
    useCartStore: (selector: any) => selector({
        addItem: jest.fn(),
    }),
}));

describe('ProductCard', () => {
    it('renders product information correctly', () => {
        const product = products[0]
        render(<ProductCard product={product} />)

        expect(screen.getByText(product.name)).toBeInTheDocument()
        expect(screen.getByText(`$${product.price.toFixed(2)}`)).toBeInTheDocument()
    })
})
