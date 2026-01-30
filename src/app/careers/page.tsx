import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const jobOpenings = [
    {
        id: 1,
        title: "Senior Product Designer",
        department: "Design",
        location: "Boston, MA",
        type: "Full-time",
        description: "Lead the design of our next-generation athletic footwear.",
    },
    {
        id: 2,
        title: "Software Engineer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        description: "Build scalable e-commerce solutions for millions of customers.",
    },
    {
        id: 3,
        title: "Marketing Manager",
        department: "Marketing",
        location: "New York, NY",
        type: "Full-time",
        description: "Drive brand awareness and customer engagement strategies.",
    },
    {
        id: 4,
        title: "Supply Chain Analyst",
        department: "Operations",
        location: "Lawrence, MA",
        type: "Full-time",
        description: "Optimize our global supply chain and inventory management.",
    },
];

export default function CareersPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 text-white">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <h1 className="font-display text-5xl font-bold sm:text-6xl">
                                Join Our Team
                            </h1>
                            <p className="mt-6 text-xl text-gray-300">
                                Help us create the future of athletic footwear
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Why Join Us */}
                <section className="py-20 bg-white">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="font-display text-3xl font-bold text-center mb-12">
                            Why New Balance?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Innovation",
                                    desc: "Work with cutting-edge technology and materials",
                                },
                                {
                                    title: "Impact",
                                    desc: "Your work affects millions of athletes worldwide",
                                },
                                {
                                    title: "Growth",
                                    desc: "Continuous learning and career development opportunities",
                                },
                            ].map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center p-6"
                                >
                                    <h3 className="font-semibold text-xl mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Job Openings */}
                <section className="py-20 bg-gray-50">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="font-display text-3xl font-bold mb-12">
                            Open Positions
                        </h2>
                        <div className="space-y-4">
                            {jobOpenings.map((job, index) => (
                                <motion.div
                                    key={job.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="hover:shadow-lg transition-shadow">
                                        <CardContent className="p-6">
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-xl mb-2">{job.title}</h3>
                                                    <p className="text-gray-600 mb-4">{job.description}</p>
                                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                                        <div className="flex items-center gap-1">
                                                            <Briefcase className="h-4 w-4" />
                                                            {job.department}
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <MapPin className="h-4 w-4" />
                                                            {job.location}
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Clock className="h-4 w-4" />
                                                            {job.type}
                                                        </div>
                                                    </div>
                                                </div>
                                                <Button className="bg-red-600 hover:bg-red-700">
                                                    Apply Now
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
