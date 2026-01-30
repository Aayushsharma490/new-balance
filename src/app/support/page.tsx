"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function SupportPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        alert("Thank you! We'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

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
                            className="text-center"
                        >
                            <h1 className="font-display text-5xl font-bold sm:text-6xl">
                                Contact Us
                            </h1>
                            <p className="mt-6 text-xl text-gray-300">
                                We're here to help with any questions
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Info & Form */}
                <section className="py-20 bg-white">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Contact Information */}
                            <div className="lg:col-span-1">
                                <h2 className="font-display text-2xl font-bold mb-6">
                                    Get in Touch
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="rounded-full bg-red-100 p-3">
                                            <Phone className="h-5 w-5 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Phone</h3>
                                            <p className="text-gray-600">1-800-NEW-BALANCE</p>
                                            <p className="text-sm text-gray-500">Mon-Fri 9am-6pm EST</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="rounded-full bg-red-100 p-3">
                                            <Mail className="h-5 w-5 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Email</h3>
                                            <p className="text-gray-600">support@newbalance.com</p>
                                            <p className="text-sm text-gray-500">We'll respond within 24h</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="rounded-full bg-red-100 p-3">
                                            <MapPin className="h-5 w-5 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Headquarters</h3>
                                            <p className="text-gray-600">
                                                100 Guest Street
                                                <br />
                                                Boston, MA 02135
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="lg:col-span-2">
                                <Card>
                                    <CardContent className="p-8">
                                        <h2 className="font-display text-2xl font-bold mb-6">
                                            Send us a Message
                                        </h2>
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium mb-2">
                                                        Name *
                                                    </label>
                                                    <Input
                                                        required
                                                        value={formData.name}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, name: e.target.value })
                                                        }
                                                        placeholder="Your name"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-2">
                                                        Email *
                                                    </label>
                                                    <Input
                                                        required
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, email: e.target.value })
                                                        }
                                                        placeholder="your@email.com"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium mb-2">
                                                    Subject *
                                                </label>
                                                <Input
                                                    required
                                                    value={formData.subject}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, subject: e.target.value })
                                                    }
                                                    placeholder="How can we help?"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium mb-2">
                                                    Message *
                                                </label>
                                                <Textarea
                                                    required
                                                    value={formData.message}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, message: e.target.value })
                                                    }
                                                    placeholder="Tell us more..."
                                                    rows={6}
                                                />
                                            </div>

                                            <Button
                                                type="submit"
                                                className="w-full bg-red-600 hover:bg-red-700"
                                                size="lg"
                                            >
                                                <Send className="mr-2 h-5 w-5" />
                                                Send Message
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-gray-50">
                    <div className="mx-auto max-w-4xl px-6 lg:px-8">
                        <h2 className="font-display text-3xl font-bold text-center mb-12">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: "What is your return policy?",
                                    a: "We offer a 30-day return policy for unworn items with original packaging.",
                                },
                                {
                                    q: "How long does shipping take?",
                                    a: "Standard shipping takes 5-7 business days. Express shipping is 2-3 days.",
                                },
                                {
                                    q: "Do you ship internationally?",
                                    a: "Yes, we ship to over 100 countries worldwide.",
                                },
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card>
                                        <CardContent className="p-6">
                                            <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                                            <p className="text-gray-600">{faq.a}</p>
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
