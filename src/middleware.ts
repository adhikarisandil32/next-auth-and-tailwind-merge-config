import { getToken } from "next-auth/jwt"
import type { NextRequest } from "next/server"

export default async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })

  console.log(token, "from  middleware")
}

export const config = {
  matcher: ["/login", "/"],
}
