/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner"

type ToastMessages = {
    loading?: string
    success?: string
    error?: string
}

type FetchOptions = {
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
    body?: unknown
    toastMessages?: ToastMessages
    signal?: AbortSignal
}

/* ----------------------------------
   BASE CONFIG
----------------------------------- */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined")
}

/* ----------------------------------
   CORE FETCH WRAPPER
----------------------------------- */

async function apiFetch<T = any>(
    endpoint: string,
    options: FetchOptions = {}
): Promise<T> {
    const {
        method = "GET",
        body,
        toastMessages,
        signal,
    } = options

    let toastId: string | number | undefined

    try {
        if (toastMessages?.loading) {
            toastId = toast.loading(toastMessages.loading)
        }

        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: body ? JSON.stringify(body) : undefined,
            credentials: "include", // IMPORTANT for cookie auth
            signal,
        })

        const data = await response.json()

        /* ------------------------------
           AUTH / SESSION HANDLING
        ------------------------------- */
        if (response.status === 401) {
            const error: any = new Error(data?.message || "Unauthorized")
            error.status = 401
            throw error
        }

        if (!response.ok || data?.success === false) {
            const message =
                data?.message || toastMessages?.error || "Something went wrong"

            toast.error(message)
            throw new Error(message)
        }

        if (toastMessages?.success) {
            toast.success(toastMessages.success)
        }

        return data
    } catch (error: any) {
        if (!toastMessages?.error && error?.message) {
            toast.error(error.message)
        }
        throw error
    } finally {
        if (toastId) toast.dismiss(toastId)
    }
}

/* ----------------------------------
   AUTH APIs
----------------------------------- */

export const authApi = {
    signup: (payload: {
        name: string
        email: string
        phone: string
        password: string
    }) =>
        apiFetch("/auth/signup", {
            method: "POST",
            body: payload,
            toastMessages: {
                loading: "Creating account...",
                success: "OTP sent successfully",
                error: "Signup failed",
            },
        }),

    verifyOtp: (payload: {
        email: string
        otp: string
    }) =>
        apiFetch("/auth/verify-otp", {
            method: "POST",
            body: payload,
            toastMessages: {
                loading: "Verifying OTP...",
                success: "Account verified successfully",
                error: "Invalid OTP",
            },
        }),

    login: (payload: {
        email: string
        password: string
    }) =>
        apiFetch("/auth/login", {
            method: "POST",
            body: payload,
            toastMessages: {
                loading: "Logging in...",
                success: "Login successful",
                error: "Invalid credentials",
            },
        }),

    logout: () =>
        apiFetch("/auth/logout", {
            method: "POST",
            toastMessages: {
                loading: "Logging out...",
                success: "Logged out successfully",
            },
        }),
}

/* ----------------------------------
   SESSION / USER
----------------------------------- */

export const sessionApi = {
    validate: () =>
        apiFetch("/auth/verify-session", {
            method: "POST",
        }),
}

/* ----------------------------------
   PACKAGES / BOOKINGS (EXAMPLE)
----------------------------------- */

export const packagesApi = {
    getAll: () =>
        apiFetch("/packages", {
            method: "GET",
        }),
}
