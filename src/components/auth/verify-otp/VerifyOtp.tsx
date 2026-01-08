"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

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
    FormMessage,
} from "@/components/ui/form"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"

import { AuroraBackground } from "@/components/ui/aurora-background"
import { Input } from "@/components/ui/input"
import { authApi } from "@/lib/api"
import Link from "next/link"

/* ----------------------------------
   VALIDATION
----------------------------------- */

const otpSchema = z.object({
    email: z.string().email("Invalid email address").optional(),
    otp: z.string().length(6, "OTP must be 6 digits"),
})


type OTPFormValues = z.infer<typeof otpSchema>

/* ----------------------------------
   PAGE
----------------------------------- */

export default function VerifyOtp() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const email = searchParams.get("email") || ""

    const form = useForm<OTPFormValues>({
        resolver: zodResolver(otpSchema),
        defaultValues: {
            email: email || "",
            otp: "",
        },
    })

    const [timer, setTimer] = useState(120)
    const [resending, setResending] = useState(false)

    /* Countdown for resend */
    useEffect(() => {
        if (timer === 0) return
        const interval = setInterval(() => {
            setTimer((t) => t - 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [timer])

    /* Submit OTP */
    const onSubmit = async (values: OTPFormValues) => {
        try {
            const userEmail = email || values.email

            if (!userEmail) {
                form.setError("email", {
                    message: "Email is required",
                })
                return
            }

            const response = await authApi.verifyOtp({
                email: userEmail,
                otp: values.otp,
            })

            if (response?.success === true) {
                router.push("/login")
            }
        } catch (error) {
            console.error("OTP verification failed:", error)
        }
    }

    /* Resend OTP */
    const handleResendOtp = async () => {
        setResending(true)

        // Call backend resend OTP API
        setTimer(90)
        setResending(false)
    }

    return (
        <AuroraBackground className="min-h-dvh px-4 sm:px-6">
            <div className="relative z-10 flex min-h-dvh items-center justify-center">
                <Card className="w-full max-w-sm sm:max-w-md rounded-2xl shadow-xl border-border bg-background/80 backdrop-blur">

                    <CardHeader className="space-y-2 text-center px-4 sm:px-6">
                        <CardTitle className="text-xl sm:text-2xl font-semibold">
                            Verify Your Account
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base text-muted-foreground">
                            Enter the 6-digit code sent to
                            <br />
                            <span className="font-medium text-foreground break-all">
                                {email || "your registered email"}
                            </span>
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6 px-4 sm:px-6 pb-6">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-5 sm:space-y-6"
                            >
                                {/* EMAIL INPUT */}
                                {!email && (
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        type="email"
                                                        placeholder="Enter your email"
                                                        className="h-11 sm:h-12 rounded-md"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                )}

                                {/* OTP INPUT */}
                                <FormField
                                    control={form.control}
                                    name="otp"
                                    render={({ field }) => (
                                        <FormItem className="flex items-center gap-2 flex-col">
                                            <FormControl>
                                                <InputOTP
                                                    maxLength={6}
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                >
                                                    <InputOTPGroup className="gap-1.5 sm:gap-2">
                                                        {[0, 1, 2, 3, 4, 5].map((i) => (
                                                            <InputOTPSlot
                                                                key={i}
                                                                index={i}
                                                                className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl text-base sm:text-lg"
                                                            />
                                                        ))}
                                                    </InputOTPGroup>
                                                </InputOTP>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* VERIFY BUTTON */}
                                <Button
                                    type="submit"
                                    className="w-full h-11 sm:h-12 rounded-xl"
                                    disabled={form.formState.isSubmitting}
                                >
                                    {form.formState.isSubmitting ? "Verifying..." : "Verify OTP"}
                                </Button>
                            </form>
                        </Form>

                        {/* RESEND */}
                        <div className="text-center text-xs sm:text-sm text-muted-foreground">
                            Didn’t receive the code?{" "}
                            {timer > 0 ? (
                                <span>Resend in {timer}s</span>
                            ) : (
                                <button
                                    onClick={handleResendOtp}
                                    disabled={resending}
                                    className="text-primary font-medium hover:underline"
                                >
                                    {resending ? "Sending..." : "Resend OTP"}
                                </button>
                            )}
                        </div>

                        {/* BACK */}
                        <p className="text-center text-xs sm:text-sm">
                            <Link
                                href="/signup"
                                className="text-muted-foreground hover:text-primary"
                            >
                                ← Back to Signup
                            </Link>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </AuroraBackground>

    )
}
