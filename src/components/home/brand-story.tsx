"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Leaf, Users, Award, Heart } from "lucide-react";

const features = [
    {
        icon: Leaf,
        title: "Sustainable Materials",
        description: "Committed to reducing our environmental footprint with eco-friendly materials.",
        color: "bg-green-100 text-green-700",
    },
    {
        icon: Users,
        title: "Community Driven",
        description: "Supporting local communities and athletes around the world.",
        color: "bg-blue-100 text-blue-700",
    },
    {
        icon: Award,
        title: "100+ Years Heritage",
        description: "A legacy of innovation and craftsmanship since 1906.",
        color: "bg-yellow-100 text-yellow-700",
    },
    {
        icon: Heart,
        title: "Made with Passion",
        description: "Every product is crafted with attention to detail and care.",
        color: "bg-red-100 text-red-700",
    },
];

export function BrandStory() {
    return (
        <section className="relative py-24 sm:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Our Story
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        For over a century, we've been dedicated to helping athletes achieve their goals.
                        Our commitment to innovation and quality has made us a trusted name in athletic footwear.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <Card className="p-8 transition-all hover:shadow-lg bg-white border-gray-200">
                                <div className={`inline-flex rounded-lg p-3 ${feature.color}`}>
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <h3 className="mt-4 font-semibold text-gray-900">{feature.title}</h3>
                                <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-16 sm:mt-24"
                >
                    <div className="text-center mb-12 sm:mb-16">
                        <h3 className="font-display text-3xl sm:text-4xl font-bold text-white">Our Journey</h3>
                        <p className="mt-4 text-base sm:text-lg text-gray-300">Over a century of innovation and excellence</p>
                    </div>

                    <div className="relative">
                        {/* Animated Timeline Line */}
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="absolute left-4 sm:left-1/2 h-full w-[3px] sm:w-[2px] -translate-x-1/2 bg-gradient-to-b from-red-600 via-red-500 to-red-600 origin-top"
                            style={{ boxShadow: "0 0 10px rgba(220, 38, 38, 0.5)" }}
                        />

                        <div className="space-y-12 sm:space-y-16">
                            {[
                                { year: "1906", title: "The Beginning", description: "Founded in Boston, Massachusetts", icon: "🏭" },
                                { year: "1960", title: "Innovation Era", description: "Introduced revolutionary cushioning technology", icon: "💡" },
                                { year: "2000", title: "Global Expansion", description: "Became a worldwide athletic brand", icon: "🌍" },
                                { year: "2024", title: "Sustainable Future", description: "Leading the industry in eco-friendly practices", icon: "🌱" },
                            ].map((milestone, index) => (
                                <motion.div
                                    key={milestone.year}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        delay: index * 0.2,
                                        duration: 0.8,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    className={`relative grid grid-cols-1 gap-4 sm:gap-8 lg:grid-cols-2 ${index % 2 === 0 ? "" : "lg:text-right"
                                        }`}
                                >
                                    {/* Animated Timeline Dot */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                                        className="absolute left-4 sm:left-1/2 top-8 sm:top-1/2 z-10 -translate-x-1/2 sm:-translate-y-1/2"
                                    >
                                        <motion.div
                                            animate={{
                                                boxShadow: [
                                                    "0 0 0 0 rgba(220, 38, 38, 0.7)",
                                                    "0 0 0 10px rgba(220, 38, 38, 0)",
                                                    "0 0 0 0 rgba(220, 38, 38, 0)"
                                                ]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                                            className="h-5 w-5 sm:h-4 sm:w-4 rounded-full border-4 border-gray-900 bg-red-600 shadow-lg shadow-red-600/50"
                                        />
                                    </motion.div>

                                    {/* Content Card */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 + 0.4 }}
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        className={`ml-12 sm:ml-0 ${index % 2 === 0 ? "" : "lg:order-2"}`}
                                    >
                                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl border-2 border-red-600/30 hover:border-red-600 transition-all shadow-xl hover:shadow-2xl hover:shadow-red-600/20">
                                            <div className="flex items-center gap-3 mb-4">
                                                <motion.span
                                                    initial={{ rotate: -180, opacity: 0 }}
                                                    whileInView={{ rotate: 0, opacity: 1 }}
                                                    transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                                                    className="text-3xl sm:text-4xl"
                                                >
                                                    {milestone.icon}
                                                </motion.span>
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    whileInView={{ scale: 1 }}
                                                    transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                                                    className="inline-block rounded-full bg-gradient-to-r from-red-600 to-red-500 px-4 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base font-bold text-white shadow-lg"
                                                >
                                                    {milestone.year}
                                                </motion.div>
                                            </div>
                                            <motion.h3
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: index * 0.2 + 0.6 }}
                                                className="text-2xl sm:text-3xl font-bold text-white mb-2"
                                            >
                                                {milestone.title}
                                            </motion.h3>
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: index * 0.2 + 0.7 }}
                                                className="text-sm sm:text-base text-gray-300"
                                            >
                                                {milestone.description}
                                            </motion.p>
                                        </div>
                                    </motion.div>
                                    <div className={`hidden lg:block ${index % 2 === 0 ? "lg:order-2" : ""}`} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
