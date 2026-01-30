"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSignup() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter signup
        setSubscribed(true);
        setEmail("");
        setTimeout(() => setSubscribed(false), 3000);
    };

    return (
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="font-display text-3xl font-bold text-white mb-4">
                        Stay in the Loop
                    </h2>
                    <p className="text-gray-300">
                        Get exclusive offers, new product launches, and more
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="flex gap-2">
                        <Input
                            type="email"
                            required
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-white text-gray-900"
                        />
                        <Button
                            type="submit"
                            className="bg-red-600 hover:bg-red-700 whitespace-nowrap"
                        >
                            <Mail className="mr-2 h-4 w-4" />
                            Subscribe
                        </Button>
                    </div>

                    {subscribed && (
                        <p className="text-green-400 text-center mt-4">
                            ✓ Thanks for subscribing!
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
