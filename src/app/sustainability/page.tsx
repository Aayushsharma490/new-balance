"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Recycle, Wind, Droplet, Factory, Heart } from "lucide-react";

const initiatives = [
    {
        icon: Leaf,
        title: "Sustainable Materials",
        description: "Using eco-friendly materials in 75% of our products by 2025.",
        progress: 68,
    },
    {
        icon: Recycle,
        title: "Recycling Program",
        description: "Collecting and recycling old shoes to reduce waste.",
        progress: 82,
    },
    {
        icon: Wind,
        title: "Carbon Neutral",
        description: "Committed to carbon neutrality across all operations by 2030.",
        progress: 45,
    },
    {
        icon: Droplet,
        title: "Water Conservation",
        description: "Reducing water usage in manufacturing by 50%.",
        progress: 71,
    },
    {
        icon: Factory,
        title: "Clean Energy",
        description: "Transitioning to 100% renewable energy in our facilities.",
        progress: 58,
    },
    {
        icon: Heart,
        title: "Community Impact",
        description: "Supporting local communities and environmental causes.",
        progress: 90,
    },
];

const milestones = [
    {
        year: "2020",
        title: "Green Initiative Launch",
        description: "Launched comprehensive sustainability program",
    },
    {
        year: "2022",
        title: "Recycled Materials",
        description: "Introduced first shoe made from 100% recycled materials",
    },
    {
        year: "2024",
        title: "Carbon Reduction",
        description: "Achieved 30% reduction in carbon emissions",
    },
    {
        year: "2025",
        title: "Future Goals",
        description: "Target: 75% sustainable materials across all products",
    },
];

export default function SustainabilityPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-green-900 to-green-800 py-24 text-white">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <div className="mx-auto mb-6 inline-flex rounded-full bg-white/10 p-4 backdrop-blur-sm">
                                <Leaf className="h-12 w-12" />
                            </div>
                            <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
                                Sustainability Commitment
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100">
                                We're committed to creating a better future through sustainable practices,
                                eco-friendly materials, and responsible manufacturing.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Initiatives Grid */}
                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <h2 className="font-display text-4xl font-bold">Our Initiatives</h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                                Concrete actions we're taking to protect our planet
                            </p>
                        </motion.div>

                        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {initiatives.map((initiative, index) => (
                                <motion.div
                                    key={initiative.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                >
                                    <Card className="h-full transition-all hover:shadow-lg">
                                        <CardContent className="p-6">
                                            <div className="mb-4 inline-flex rounded-full bg-green-100 p-3 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                                                <initiative.icon className="h-6 w-6" />
                                            </div>
                                            <h3 className="text-xl font-semibold">{initiative.title}</h3>
                                            <p className="mt-2 text-sm text-muted-foreground">
                                                {initiative.description}
                                            </p>

                                            {/* Progress Bar */}
                                            <div className="mt-4">
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-muted-foreground">Progress</span>
                                                    <span className="font-semibold">{initiative.progress}%</span>
                                                </div>
                                                <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${initiative.progress}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.5, duration: 1 }}
                                                        className="h-full bg-green-600"
                                                    />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="bg-muted/30 py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <h2 className="font-display text-4xl font-bold">Our Journey</h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                                Key milestones in our sustainability journey
                            </p>
                        </motion.div>

                        <div className="mt-16 space-y-8">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={milestone.year}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className="relative"
                                >
                                    <Card className="overflow-hidden transition-all hover:shadow-lg">
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0">
                                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 font-bold text-green-600 dark:bg-green-900/20 dark:text-green-400">
                                                        {milestone.year.slice(2)}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium text-muted-foreground">
                                                        {milestone.year}
                                                    </div>
                                                    <h3 className="mt-1 text-xl font-semibold">{milestone.title}</h3>
                                                    <p className="mt-2 text-muted-foreground">{milestone.description}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-2xl bg-gradient-to-r from-green-600 to-green-700 p-12 text-center text-white"
                        >
                            <h2 className="font-display text-3xl font-bold sm:text-4xl">
                                Join Us in Making a Difference
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">
                                Every purchase supports our commitment to sustainability. Together, we can create
                                a better future for our planet.
                            </p>
                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <button className="rounded-md bg-white px-6 py-3 font-semibold text-green-600 transition-all hover:bg-green-50">
                                    Learn More
                                </button>
                                <button className="rounded-md border-2 border-white px-6 py-3 font-semibold text-white transition-all hover:bg-white/10">
                                    Shop Sustainable
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
