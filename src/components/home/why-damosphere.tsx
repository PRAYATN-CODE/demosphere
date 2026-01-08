"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import { eveningAmbienceImageLink, lakeViewImageLink, tentImageLink } from "../utils/imageLinks"

const features = [
    {
        title: "Luxurious Glamping Experience",
        description:
            "Comfortable tents with cozy beds, electricity, and a peaceful natural setting.",
    },
    {
        title: "Stunning Location by Bhatghar Dam",
        description:
            "Wake up to serene lake views just 45 minutes away from Pune.",
    },
    {
        title: "Quality Home-Made Food",
        description:
            "Fresh, hygienic meals prepared with care — veg, non-veg & Jain options.",
    },
    {
        title: "Personalized Hospitality",
        description:
            "Hosted by Shweta & Nilesh with 15+ years of experience in hospitality.",
    },
]

export default function WhyDamosphereSection() {
    return (
        <section className="relative py-24">
            <div className="mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2 items-center">

                {/* LEFT: TEXT CONTENT */}
                <div className="space-y-8">
                    <Badge variant="secondary" className="w-fit">
                        The Damosphere Difference
                    </Badge>

                    <h2 className="text-4xl font-semibold tracking-tight text-foreground">
                        A Stay Designed Around
                        <span className="block text-primary">
                            Comfort, Nature & Care
                        </span>
                    </h2>

                    <p className="max-w-xl text-muted-foreground text-lg leading-relaxed">
                        Damosphere offers a unique glamping retreat by the serene waters of
                        Bhatghar Dam — blending natural surroundings with thoughtfully curated
                        comfort. Every detail, from the stay to the food and activities, is
                        designed to help you slow down, reconnect, and truly unwind.
                    </p>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {features.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full rounded-2xl bg-card backdrop-blur-md border border-border shadow-sm hover:shadow-primary transition-all duration-300 ease-in-out">
                                    <CardContent className="p-6 space-y-2">
                                        <h4 className="font-semibold text-foreground">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            {item.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: IMAGE COLLAGE */}
                <div className="relative grid grid-cols-2 gap-4">
                    <div className="relative h-60 rounded-2xl overflow-hidden">
                        <Image
                            src={lakeViewImageLink}
                            alt="Lakeside view"
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            priority
                        />
                    </div>

                    <div className="relative h-60 rounded-2xl overflow-hidden">
                        <Image
                            src={tentImageLink}
                            alt="Glamping tents"
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            priority
                        />
                    </div>

                    <div className="relative h-60 rounded-2xl overflow-hidden col-span-2">
                        <Image
                            src={eveningAmbienceImageLink}
                            alt="Evening ambience"
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            priority
                        />
                    </div>

                    {/* Aceternity-style glow */}
                    <div className="absolute -z-10 inset-0 bg-primary/20 blur-[120px]" />
                </div>
            </div>
        </section>
    )
}
