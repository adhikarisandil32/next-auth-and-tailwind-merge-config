import NextAuth from "next-auth/next"
import type { NextAuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { pages } from "next/dist/build/templates/app-page"
import type { JWT } from "next-auth/jwt"
// import Credentials from "next-auth/providers/credentials"

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifier: { label: "Email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<User | null> {
        try {
          const res = await fetch("http://localhost:1337/api/auth/local", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              identifier: "buyer2@gmail.com",
              password: "Password1",
            }),
          })

          const user = await res.json()
          return user
        } catch (error) {
          console.log(error)

          return null
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  },
  callbacks: {
    async session({ session, token, trigger, user }) {
      if (token) {
        session.user.jwt = token.jwt as string
        session.user.user = token.user as {}
      }

      // console.log({ session, token, trigger, user }, "from session cb")

      return session
    },

    async jwt({ user, account, token, profile, session, trigger }) {
      if (user) {
        token.jwt = user.jwt
        token.user = user.user
      }

      // console.log({ user, account, token, profile, session, trigger }, "from jwt cb")

      return token
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
