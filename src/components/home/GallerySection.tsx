"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

// 👉 import your real assets
import {
    archeryImageLink,
    birthdayCelebrationImageLink,
    bonfireImageLink,
    breakfastImageLink,
    coupleImageLink,
    coupleVideoLink,
    eveningAmbienceImageLink,
    lakeViewImageLink,
    mainViewVideoLink,
    sunriseImageLink,
    sunsetVideoLink,
    tentImageLink,
} from "../utils/imageLinks"

type GalleryItem = {
    id: number
    category: string
    type: "image" | "video"
    src: string
}

const filters = [
    "All",
    "Outdoor Ambience",
    "Stay & Tents",
    "Activities",
    "Food & Dining",
    "Celebrations",
    "Videos",
]

const galleryItems: GalleryItem[] = [
    // Outdoor
    { id: 1, category: "Outdoor Ambience", type: "image", src: sunriseImageLink },
    { id: 2, category: "Outdoor Ambience", type: "image", src: lakeViewImageLink },
    { id: 3, category: "Outdoor Ambience", type: "image", src: eveningAmbienceImageLink },

    // Stay
    { id: 4, category: "Stay & Tents", type: "image", src: tentImageLink },
    { id: 5, category: "Stay & Tents", type: "image", src: coupleImageLink },

    // Activities
    { id: 6, category: "Activities", type: "image", src: archeryImageLink },
    { id: 7, category: "Activities", type: "image", src: bonfireImageLink },

    // Food
    { id: 8, category: "Food & Dining", type: "image", src: breakfastImageLink },

    // Celebrations
    { id: 9, category: "Celebrations", type: "image", src: birthdayCelebrationImageLink },

    // Videos
    { id: 10, category: "Videos", type: "video", src: coupleVideoLink },
    { id: 11, category: "Videos", type: "video", src: sunsetVideoLink },
    { id: 12, category: "Videos", type: "video", src: mainViewVideoLink },
]

export default function GallerySection() {
    const [activeFilter, setActiveFilter] = useState("All")
    const [playingVideo, setPlayingVideo] = useState<number | null>(null)

    const filteredItems =
        activeFilter === "All"
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeFilter)

    return (
        <section id="gallery" className="relative py-28">
            <div className="mx-auto max-w-7xl px-6 space-y-16">

                {/* HEADER */}
                <div className="max-w-3xl space-y-5">
                    <Badge variant="secondary" className="w-fit">
                        Gallery
                    </Badge>

                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                        Glimpses of
                        <span className="block text-primary">
                            Life at Damosphere
                        </span>
                    </h2>

                    <p className="text-muted-foreground text-lg">
                        Real moments captured at Damosphere — peaceful mornings, joyful
                        celebrations, outdoor fun, and cozy evenings by the fire.
                    </p>
                </div>

                {/* FILTERS */}
                <div className="flex flex-wrap gap-3">
                    {filters.map((filter) => (
                        <Button
                            key={filter}
                            size="sm"
                            variant={activeFilter === filter ? "default" : "outline"}
                            className="rounded-full"
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </Button>
                    ))}
                </div>

                {/* GALLERY GRID */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="relative overflow-hidden rounded-2xl group bg-muted"
                        >
                            {item.type === "image" && (
                                <Image
                                    src={item.src}
                                    alt="Damosphere gallery"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            )}

                            {item.type === "video" && (
                                <div className="relative">
                                    {playingVideo === item.id ? (
                                        <video
                                            src={item.src}
                                            controls
                                            autoPlay
                                            playsInline
                                            className="w-full h-auto rounded-2xl"
                                        />
                                    ) : (
                                        <>
                                            <Image
                                                src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg" // thumbnail
                                                alt="Video preview"
                                                width={800}
                                                height={600}
                                                className="w-full h-auto object-cover"
                                            />
                                            <button
                                                onClick={() => setPlayingVideo(item.id)}
                                                className="absolute inset-0 flex items-center justify-center bg-black/40"
                                            >
                                                <Play className="h-12 w-12 text-white" />
                                            </button>
                                        </>
                                    )}
                                </div>
                            )}

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
