"use client";

import { cn } from "@/lib/utils"; // Ensure you have your standard tailwind utils defined
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

// Shadcn UI Imports
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { AnimatedGridPattern } from "../ui/animated-grid-pattern";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { AuroraText } from "../ui/aurora-text";

// Magic UI Imports (Ensure you have copied these components into your project)

export default function HeroSection() {
    return (
        <section id="home" className="relative w-full overflow-hidden bg-background py-24 md:py-32 lg:py-40 px-6">
            {/* --- BACKGROUND EFFECT (Magic UI) --- */}
            {/* This pattern uses your theme's muted color for subtle lines */}
            <AnimatedGridPattern
                className={cn(
                    "hidden md:block mask-image:radial-gradient(600px_circle_at_center,white,transparent)",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                    // Using tailwind classes that map to your CSS variables
                    "fill-muted stroke-muted-foreground/20"
                )}
            />

            <div className="container max-w-7xl mx-auto relative z-10 flex flex-col items-center gap-10 text-center lg:flex-row lg:text-left lg:gap-16">

                {/* --- LEFT COLUMN: Text Content --- */}
                <div className="flex flex-1 flex-col items-center lg:items-start space-y-8">

                    <div
                        className={cn(
                            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                        )}
                    >
                        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                            <Badge
                                variant="secondary"
                                className="rounded-full px-2 py-0.5 text-[10px] mr-2 font-semibold"
                            >
                                NATURE ESCAPE
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                                Glamping near Bhatghar Dam
                            </span>
                            <ChevronRight className="h-3 w-3 text-muted-foreground ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                        </AnimatedShinyText>
                    </div>

                    {/* Main Headline */}
                    <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:leading-[1.1]">
                        Where <AuroraText
                            speed={4}
                            colors={[
                                "#FFB347", // bold sunset
                                "#FF7A18", // fiery coral
                                "#6FCF97", // vibrant green
                            ]}
                        >
                            Hospitality
                        </AuroraText> & Nature
                        <span className="block ">
                            Create Unforgettable Stays
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="max-w-lg text-lg text-muted-foreground sm:text-xl">
                        Damosphere – The Tent Life offers a serene glamping experience by the
                        Bhatghar Dam. Perfect for couples, families, and groups looking to
                        unwind amidst nature with comfort, warmth, and personal care.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                        <Link
                            href="#packages"
                            className={cn(
                                buttonVariants({ size: "lg" }),
                                "gap-2 shadow-sm rounded-xl"
                            )}
                        >
                            View Packages <ArrowRight className="h-4 w-4" />
                        </Link>

                        <Button
                            variant="outline"
                            size="lg"
                            className="gap-2 rounded-xl border-border hover:bg-muted/50"
                            asChild
                        >
                            <a href="tel:+919881994994">
                                Call for Booking
                            </a>
                        </Button>
                    </div>

                    {/* Trust / Social Proof */}
                    <p className="text-sm text-muted-foreground pt-4">
                        Hosted with care by Shweta & Nilesh • 15+ years of hospitality experience
                    </p>
                </div>

                {/* --- RIGHT COLUMN: Video Integration (Magic UI) --- */}
                <div className="flex-1 w-full max-w-162.5 relative lg:mt-0 mt-10">
                    <div className="relative h-95 lg:h-112.5 rounded-2xl border border-border bg-card/50 p-2 backdrop-blur-sm">
                        <Image
                            src="https://content3.jdmagicbox.com/v2/comp/bhor/w2/9999p2113.2113.220129205208.u1w2/catalogue/damosphere-the-tent-life-bhatghar-bhor-camp-organisers-3tnmc5md6l.jpg"
                            alt="Sunrise view"
                            fill
                            priority
                            quality={100}
                            className="object-cover rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}