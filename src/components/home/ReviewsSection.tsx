"use client"

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee"; // Ensure this path is correct

const reviews = [
    {
        name: "Amit Patil",
        location: "Pune",
        body: "Beautiful location and very peaceful atmosphere. Bonfire night and food were amazing. Perfect weekend getaway.",
        img: "https://avatar.vercel.sh/amit",
    },
    {
        name: "Sneha Kulkarni",
        location: "Mumbai",
        body: "Loved the glamping experience! Clean tents, great food and very warm hospitality by the owners.",
        img: "https://avatar.vercel.sh/sneha",
    },
    {
        name: "Rahul Deshmukh",
        location: "Pune",
        body: "The dam view, activities and evening entertainment made our stay memorable. Highly recommended for families.",
        img: "https://avatar.vercel.sh/rahul",
    },
    {
        name: "Neha Joshi",
        location: "Satara",
        body: "A perfect mix of nature and comfort. Kids loved the games and trampoline. Food was homely and tasty.",
        img: "https://avatar.vercel.sh/neha",
    },
    {
        name: "Saurabh More",
        location: "Kolhapur",
        body: "Very calm and scenic place. Outdoor movie night was a surprise highlight. Will definitely visit again.",
        img: "https://avatar.vercel.sh/saurabh",
    },
    {
        name: "Pooja Shah",
        location: "Pune",
        body: "Great place for couples. Evening ambience, music and bonfire created a lovely vibe.",
        img: "https://avatar.vercel.sh/pooja",
    },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
    img,
    name,
    location,
    body,
}: {
    img: string
    name: string
    location: string
    body: string
}) => {
    return (
        <figure
            className={cn(
                "relative h-full cursor-pointer overflow-hidden rounded-2xl border p-4",
                "transition-all duration-300 hover:scale-[1.03]",
                "bg-card/80 backdrop-blur-md border-border",
                // FIX: Changed from w-[85vw] to fixed width to prevent mobile layout explosion
                "w-70 sm:w-80"
            )}
        >
            <div className="flex items-center gap-3">
                <img
                    className="rounded-full"
                    width="36"
                    height="36"
                    alt={name}
                    src={img}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-semibold text-foreground">
                        {name}
                    </figcaption>
                    <p className="text-xs text-muted-foreground">
                        {location}
                    </p>
                </div>
            </div>

            <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
                “{body}”
            </blockquote>
        </figure>
    )
}


export default function ReviewsSection() {
    return (
        // FIX: Added overflow-hidden here to strictly contain the marquee
        <section id="reviews" className="relative w-full py-20 sm:py-28 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-12 sm:space-y-14">

                {/* HEADER */}
                <div className="w-full max-w-3xl space-y-4 text-left">
                    <Badge variant="secondary" className="mx-auto sm:mx-0 w-fit">
                        Guest Reviews
                    </Badge>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                        What Our Guests
                        <span className="block text-primary">
                            Love About Damosphere
                        </span>
                    </h2>

                    <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto sm:mx-0">
                        Real experiences shared by guests who stayed, relaxed,
                        and created memories with us.
                    </p>
                </div>

                {/* MARQUEE WRAPPER */}
                {/* overflow-hidden here acts as a double safety net */}
                <div className="relative flex w-full flex-col gap-6 overflow-hidden">
                    <Marquee
                        pauseOnHover
                        className="[--duration:30s] sm:[--duration:22s]"
                    >
                        {firstRow.map((review, idx) => (
                            <ReviewCard key={idx} {...review} />
                        ))}
                    </Marquee>

                    <Marquee
                        reverse
                        pauseOnHover
                        className="[--duration:30s] sm:[--duration:22s]"
                    >
                        {secondRow.map((review, idx) => (
                            <ReviewCard key={idx} {...review} />
                        ))}
                    </Marquee>

                    {/* Edge fade (adjusted for better compatibility) */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-32 bg-linear-to-r from-background to-transparent z-10"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-32 bg-linear-to-l from-background to-transparent z-10"></div>
                </div>
            </div>
        </section>
    )
}