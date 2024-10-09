import { getToken } from "next-auth/jwt"
import { NextResponse, type NextRequest } from "next/server"

export default async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })

  const isAuthAccessiblePath = request.nextUrl.pathname === "/"
  const isNoAuthAccessiblePath = request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/register"

  if (isAuthAccessiblePath && !token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  if (isNoAuthAccessiblePath && token) {
    return NextResponse.redirect(new URL("/", request.url))
  }
}

export const config = {
  matcher: ["/login", "/"],
}
