"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface Review {
    id: number;
    author: string;
    rating: number;
    date: string;
    comment: string;
}

const mockReviews: Review[] = [
    {
        id: 1,
        author: "John D.",
        rating: 5,
        date: "2024-01-15",
        comment: "Best running shoes I've ever owned! Incredibly comfortable.",
    },
    {
        id: 2,
        author: "Sarah M.",
        rating: 4,
        date: "2024-01-10",
        comment: "Great quality and fit. Would recommend!",
    },
];

export function ProductReviews() {
    const [reviews, setReviews] = useState<Review[]>(mockReviews);
    const [showForm, setShowForm] = useState(false);
    const [newReview, setNewReview] = useState({
        author: "",
        rating: 5,
        comment: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const review: Review = {
            id: reviews.length + 1,
            ...newReview,
            date: new Date().toISOString().split("T")[0],
        };
        setReviews([review, ...reviews]);
        setNewReview({ author: "", rating: 5, comment: "" });
        setShowForm(false);
    };

    const averageRating =
        reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

    return (
        <div className="space-y-8">
            {/* Rating Summary */}
            <div className="flex items-center gap-8">
                <div className="text-center">
                    <div className="text-5xl font-bold">{averageRating.toFixed(1)}</div>
                    <div className="flex gap-1 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                className={`h-5 w-5 ${star <= averageRating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{reviews.length} reviews</p>
                </div>

                <Button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-red-600 hover:bg-red-700"
                >
                    Write a Review
                </Button>
            </div>

            {/* Review Form */}
            {showForm && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                >
                    <Card>
                        <CardContent className="p-6">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Your Name *
                                    </label>
                                    <Input
                                        required
                                        value={newReview.author}
                                        onChange={(e) =>
                                            setNewReview({ ...newReview, author: e.target.value })
                                        }
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Rating *
                                    </label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => setNewReview({ ...newReview, rating: star })}
                                            >
                                                <Star
                                                    className={`h-8 w-8 cursor-pointer ${star <= newReview.rating
                                                            ? "fill-yellow-400 text-yellow-400"
                                                            : "text-gray-300"
                                                        }`}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Your Review *
                                    </label>
                                    <Textarea
                                        required
                                        value={newReview.comment}
                                        onChange={(e) =>
                                            setNewReview({ ...newReview, comment: e.target.value })
                                        }
                                        rows={4}
                                    />
                                </div>

                                <div className="flex gap-2">
                                    <Button type="submit" className="bg-red-600 hover:bg-red-700">
                                        Submit Review
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => setShowForm(false)}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            )}

            {/* Reviews List */}
            <div className="space-y-4">
                {reviews.map((review, index) => (
                    <motion.div
                        key={review.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card>
                            <CardContent className="p-6">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <p className="font-semibold">{review.author}</p>
                                        <p className="text-sm text-gray-500">{review.date}</p>
                                    </div>
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className={`h-4 w-4 ${star <= review.rating
                                                        ? "fill-yellow-400 text-yellow-400"
                                                        : "text-gray-300"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-700">{review.comment}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
