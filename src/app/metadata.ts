import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "New Balance - Fearlessly Independent Since 1906",
    description:
        "Discover premium athletic footwear and apparel from New Balance. Shop running shoes, sneakers, and sportswear designed for performance and style.",
    keywords:
        "New Balance, running shoes, sneakers, athletic footwear, sportswear, 990, Fresh Foam, FuelCell",
    authors: [{ name: "New Balance" }],
    openGraph: {
        title: "New Balance - Fearlessly Independent",
        description: "Premium athletic footwear and apparel since 1906",
        type: "website",
        locale: "en_US",
        siteName: "New Balance",
    },
    twitter: {
        card: "summary_large_image",
        title: "New Balance - Fearlessly Independent",
        description: "Premium athletic footwear and apparel since 1906",
    },
    robots: {
        index: true,
        follow: true,
    },
};
