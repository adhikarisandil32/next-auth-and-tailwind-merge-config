"use client"

import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import React from "react"

type NextAuthProps = {
  children: React.ReactNode
  session?: Session
}

export default function NextAuthProvider({ children, session }: NextAuthProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>
}
