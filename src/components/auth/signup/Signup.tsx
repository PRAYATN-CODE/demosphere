"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import { BackgroundLines } from "@/components/ui/background-lines"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { authApi } from "@/lib/api"
import { useEffect, useState } from "react"

/* ----------------------------------
   VALIDATION SCHEMA (FULL)
----------------------------------- */

const signupSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name is too long"),

    email: z
        .string()
        .email("Please enter a valid email address"),

    phone: z
        .string()
        .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Must contain one uppercase letter")
        .regex(/[0-9]/, "Must contain one number"),
})

type SignupFormValues = z.infer<typeof signupSchema>

/* ----------------------------------
   PAGE
----------------------------------- */

export default function Signup() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const redirectTo = searchParams.get("redirect") || "/packages"

    const form = useForm<SignupFormValues>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            password: "",
        },
    })

    const isLoading = form.formState.isSubmitting

    const onSubmit = async (values: SignupFormValues) => {
        try {
            await authApi.signup({
                name: values.name,
                email: values.email,
                phone: values.phone,
                password: values.password,
            })

            // Redirect to OTP verification page
            router.push(
                `/verify-otp?email=${encodeURIComponent(values.email)}`
            )
        } catch (error) {
            // ❌ Do nothing here
            // Errors + toasts are already handled in api.ts
            console.error("Signup error:", error)
        }
    }

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, [])

    const Wrapper = isMobile ? "div" : BackgroundLines

    return (
        <Wrapper className="flex items-center justify-center w-full flex-col px-4">
            <div className="relative z-10 grid min-h-dvh grid-cols-1 lg:grid-cols-2 max-w-full w-full overflow-y-auto">

                {/* LEFT – FORM */}
                <div className="flex items-center justify-center px-6 w-full">
                    <Card className="w-full max-w-lg rounded-2xl border border-border bg-white/10 backdrop-blur-xl shadow-lg">
                        <CardHeader className="text-center space-y-2">
                            <CardTitle className="text-2xl font-semibold">
                                Create Your Account
                            </CardTitle>
                            <CardDescription>
                                Begin your stay with comfort & nature
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="space-y-5"
                                >
                                    {/* NAME */}
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Full Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Your full name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* EMAIL */}
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email Address</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="email"
                                                        placeholder="you@example.com"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* PHONE */}
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Phone Number</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="tel"
                                                        placeholder="10-digit mobile number"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* PASSWORD */}
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="password"
                                                        placeholder="Create a strong password"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* CTA */}
                                    <Button
                                        type="submit"
                                        className="w-full rounded-xl"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Creating account..." : "Sign Up"}
                                    </Button>

                                    <p className="text-center text-sm text-muted-foreground">
                                        Already have an account?{" "}
                                        <Link
                                            href={`/login?redirect=${redirectTo}`}
                                            className="text-primary font-medium hover:underline"
                                        >
                                            Login
                                        </Link>
                                    </p>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>

                {/* RIGHT – VISUAL PANEL */}
                <div className="relative hidden lg:block w-full">
                    <Image
                        src="https://r1imghtlak.mmtcdn.com/c23e1aaaa90d11eb97390242ac110003.jpg"
                        alt="Damosphere Glamping"
                        fill
                        priority
                        quality={100}
                        className="object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30" />

                    {/* Text Content */}
                    <div className="absolute bottom-10 left-10 max-w-sm text-white space-y-3">
                        <h3 className="text-2xl font-semibold">
                            Where Hospitality Meets Nature
                        </h3>
                        <p className="text-sm opacity-90">
                            Create unforgettable moments surrounded by peace, comfort,
                            and scenic beauty.
                        </p>
                    </div>
                </div>


            </div>
        </Wrapper>
    )
}
