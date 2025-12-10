export default function CookiesPage() {
    return (
        <div className="container mx-auto px-4 py-20 max-w-3xl">
            <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="lead text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                    Last updated: {new Date().toLocaleDateString()}
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. What Are Cookies</h2>
                <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                    Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Cookies</h2>
                <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                    We use cookies for the following purposes:
                </p>
                <ul className="list-disc pl-6 mb-4 text-neutral-600 dark:text-neutral-400 space-y-2">
                    <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly (e.g., keeping items in your cart).</li>
                    <li><strong>Analytics Cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                    <li><strong>Marketing Cookies:</strong> These are used to track visitors across websites to display ads that are relevant and engaging.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Managing Cookies</h2>
                <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                    Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
                </p>
            </div>
        </div>
    );
}
