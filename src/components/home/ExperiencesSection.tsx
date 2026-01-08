"use client"

import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { archeryImageLink, bonfireImageLink, outdoorBeachImageLink } from "../utils/imageLinks"
import { ActivitiesAnimatedList } from "./ActivitiesAnimatedList"

export default function ActivitiesEntertainmentSection() {
    return (
        <section id="activities" className="relative py-28">
            <div className="mx-auto max-w-7xl px-6 space-y-20">

                {/* HEADER */}
                <div className="max-w-3xl space-y-5">
                    <Badge variant="secondary" className="w-fit">
                        Activities & Entertainment
                    </Badge>

                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
                        Play, Relax &
                        <span className="block text-primary">
                            Celebrate Together
                        </span>
                    </h2>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                        From fun-filled games during the day to cozy entertainment under
                        the stars, Damosphere offers experiences that bring people together
                        and turn simple moments into lasting memories.
                    </p>
                </div>

                {/* MAIN GRID */}
                <div className="grid gap-16 lg:grid-cols-2 items-start">

                    {/* LEFT — ACTIVITY LIST (NO IMAGE REQUIRED) */}
                    <div className="space-y-10">

                        {/* Activities */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-foreground">
                                🎯 Activities & Evening Entertainment
                            </h3>

                            <p className="text-muted-foreground text-sm max-w-md">
                                A thoughtful mix of games, outdoor fun, and evening entertainment —
                                designed to help guests relax, connect, and enjoy every moment.
                            </p>

                            <ActivitiesAnimatedList />
                        </div>
                    </div>

                    {/* RIGHT — IMAGE MOSAIC (ONLY IF IMAGES EXIST) */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Horizontal image */}
                        <div className="relative col-span-2 aspect-video overflow-hidden rounded-3xl">
                            <Image
                                src={archeryImageLink}
                                alt="Outdoor activities at Damosphere"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 50vw, 100vw"
                            />
                        </div>

                        {/* Vertical image */}
                        <div className="relative aspect-3/4 overflow-hidden rounded-3xl">
                            <Image
                                src={outdoorBeachImageLink}
                                alt="Games and fun moments"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 25vw, 50vw"
                            />
                        </div>

                        {/* Vertical image */}
                        <div className="relative aspect-3/4 overflow-hidden rounded-3xl">
                            <Image
                                src={bonfireImageLink}
                                alt="Bonfire nights at Damosphere"
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 25vw, 50vw"
                            />
                        </div>

                        {/* Soft glow */}
                        <div className="absolute -z-10 inset-0 bg-primary/20 blur-[140px]" />
                    </div>
                </div>
            </div>
        </section>
    )
}
