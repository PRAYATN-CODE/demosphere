import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function middleware(req: NextRequest) {
    const token = req.cookies.get("auth_token")?.value
    const pathname = req.nextUrl.pathname

    if (pathname.startsWith("/packages")) {
        if (!token) {
            const loginUrl = new URL("/login", req.url)
            loginUrl.searchParams.set("redirect", "/packages")
            return NextResponse.redirect(loginUrl)
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/packages/:path*"],
}
