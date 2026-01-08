"use client"

import { cn } from "@/lib/utils"
import { AnimatedList } from "../ui/animated-list"

interface Item {
    name: string
    description: string
    icon: string
    color: string
    category: "Activity" | "Entertainment"
}

const items: Item[] = [
    // 🎯 Activities
    {
        name: "Mini Golf",
        description: "Fun and relaxing outdoor game",
        icon: "⛳",
        color: "#22c55e",
        category: "Activity",
    },
    {
        name: "Archery",
        description: "Test your focus and precision",
        icon: "🏹",
        color: "#f97316",
        category: "Activity",
    },
    {
        name: "Fishing",
        description: "Peaceful moments by the dam",
        icon: "🐠",
        color: "#0ea5e9",
        category: "Activity",
    },
    {
        name: "Dart",
        description: "Light competitive fun",
        icon: "🎯",
        color: "#ef4444",
        category: "Activity",
    },
    {
        name: "Badminton",
        description: "Casual games with friends & family",
        icon: "🏸",
        color: "#22c55e",
        category: "Activity",
    },
    {
        name: "Table Tennis",
        description: "Indoor fun for all ages",
        icon: "🏓",
        color: "#6366f1",
        category: "Activity",
    },
    {
        name: "Hooks & Ring",
        description: "Simple, engaging skill game",
        icon: "🔄",
        color: "#f59e0b",
        category: "Activity",
    },
    {
        name: "Trampoline",
        description: "Fun jumps and laughter",
        icon: "🤸‍♂️",
        color: "#ec4899",
        category: "Activity",
    },
    {
        name: "Playing Cards",
        description: "Relaxed indoor entertainment",
        icon: "♣️",
        color: "#64748b",
        category: "Activity",
    },

    // 🎶 Entertainment
    {
        name: "Karaoke",
        description: "Sing your heart out with friends",
        icon: "🎤",
        color: "#a855f7",
        category: "Entertainment",
    },
    {
        name: "Loud Music",
        description: "Enjoy music in a lively atmosphere",
        icon: "🎶",
        color: "#0ea5e9",
        category: "Entertainment",
    },
    {
        name: "Bonfire Nights",
        description: "Warm evenings under the stars",
        icon: "🔥",
        color: "#ef4444",
        category: "Entertainment",
    },
    {
        name: "Outdoor Cinema (Weekends)",
        description: "Movie nights in open air",
        icon: "🎬",
        color: "#6366f1",
        category: "Entertainment",
    },
]

function ActivityCard({ name, description, icon, color, category }: Item) {
    return (
        <div
            className={cn(
                "relative mx-auto w-full max-w-full rounded-2xl p-4",
                "transition-all duration-200 hover:scale-[1.03]",
                "bg-card/70 backdrop-blur-md border border-border"
            )}
        >
            <div className="flex items-center gap-4">
                <div
                    className="flex size-10 items-center justify-center rounded-xl text-lg"
                    style={{ backgroundColor: color }}
                >
                    {icon}
                </div>

                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-foreground">
                        {name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                        {description}
                    </span>
                </div>

                <span className="ml-auto text-xs text-muted-foreground">
                    {category}
                </span>
            </div>
        </div>
    )
}

export function ActivitiesAnimatedList() {
    return (
        <div className="relative h-110 overflow-hidden p-2">
            <AnimatedList>
                {items.map((item, index) => (
                    <ActivityCard key={index} {...item} />
                ))}
            </AnimatedList>

            {/* fade bottom */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-background" />
        </div>
    )
}
