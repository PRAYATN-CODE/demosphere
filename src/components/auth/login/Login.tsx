"use client"

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
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import { authApi } from "@/lib/api"

/* ----------------------------------
   VALIDATION
----------------------------------- */

const loginSchema = z.object({
    email: z.string().email("Enter a valid email address"),
    password: z.string().min(1, "Password is required"),
})

type LoginFormValues = z.infer<typeof loginSchema>

/* ----------------------------------
   PAGE
----------------------------------- */

export default function Login() {

    const router = useRouter()
    const searchParams = useSearchParams()
    const redirectTo = searchParams.get("redirect") || "/packages"

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const isLoading = form.formState.isSubmitting

    const onSubmit = async (values: LoginFormValues) => {
        try {
            const { data } = await authApi.login({
                email: values.email,
                password: values.password,
            })

            // ✅ Save token to localStorage
            if (data?.token) {
                localStorage.setItem("auth_token", data.token)
            }
            
            // On successful login
            router.push(redirectTo)
        } catch (error: any) {
            console.error("Login error:", error)

            // 👉 Redirect unverified users to OTP page
            if (error?.status === 401) {
                router.push(
                    `/verify-otp?email=${encodeURIComponent(values.email)}`
                )
                return
            }

            // Other errors (invalid credentials, etc.)
            form.setError("root", {
                message: error?.message || "Login failed. Please try again.",
            })
        }
    }

    return (
        <BackgroundBeamsWithCollision className="min-h-dvh">
            <div className="relative z-10 flex min-h-dvh items-center justify-center px-4 w-full">
                <Card className="w-full max-w-lg rounded-2xl border-border bg-background/80 backdrop-blur shadow-xl">
                    <CardHeader className="text-center space-y-2">
                        <CardTitle className="text-2xl font-semibold">
                            Welcome Back
                        </CardTitle>
                        <CardDescription>
                            Login to continue your journey with Damosphere
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-5"
                            >
                                {/* GLOBAL ERROR */}
                                {form.formState.errors.root && (
                                    <div className="rounded-lg bg-destructive/10 border border-destructive/20 px-3 py-2 text-sm text-destructive">
                                        {form.formState.errors.root.message}
                                    </div>
                                )}

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
                                                    placeholder="Enter your password"
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
                                    {isLoading ? "Logging in..." : "Login"}
                                </Button>

                                {/* LINKS */}
                                <div className="flex flex-col gap-2 text-center text-sm">
                                    <Link
                                        href="/signup"
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        Don’t have an account? Sign up
                                    </Link>

                                    <Link
                                        href="/verify-otp"
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        Didn’t verify your account?
                                    </Link>
                                </div>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </BackgroundBeamsWithCollision>
    )
}
