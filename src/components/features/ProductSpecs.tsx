"use client";

import { motion } from "framer-motion";

const specs = [
    { label: "Material", value: "Premium Grade Aluminum" },
    { label: "Dimensions", value: "12.5 x 8.4 x 2.1 inches" },
    { label: "Weight", value: "1.2 lbs" },
    { label: "Connectivity", value: "Bluetooth 5.2, USB-C" },
    { label: "Battery Life", value: "Up to 24 hours" },
    { label: "Warranty", value: "2 Year Manufacturer Warranty" },
    { label: "In the Box", value: "Device, Charging Cable, Manual" }
];

export default function ProductSpecs() {
    return (
        <div className="py-12 border-t border-neutral-200 dark:border-neutral-800">
            <h2 className="text-2xl font-bold mb-8">Technical Specifications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {specs.map((spec, index) => (
                    <motion.div
                        key={spec.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex justify-between py-3 border-b border-neutral-100 dark:border-neutral-800"
                    >
                        <span className="text-neutral-500 font-medium">{spec.label}</span>
                        <span className="font-medium text-neutral-900 dark:text-white">{spec.value}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
