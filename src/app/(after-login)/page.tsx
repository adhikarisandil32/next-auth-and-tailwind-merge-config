"use client"

import { getServerSession } from "next-auth"
import { getSession, useSession } from "next-auth/react"
import React from "react"

export default function HomePage() {
  // const session = await getServerSession()
  // const session = await getSession()
  const func = async () => {
    const session = await getSession()

    console.log(session, "useSession from homepage")
  }

  func()

  // console.log(session, "session from homepage")
  // console.log(session, "getSession from homepage")

  return (
    <div className="text-center">
      <p className="text-3xl">This is a home page.</p>
      <p>Only Logged In Users can have access</p>
    </div>
  )
}
