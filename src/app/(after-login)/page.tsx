import { getServerSession } from "next-auth"
// import { useSession } from "next-auth/react"
import React, { useEffect } from "react"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { getSession } from "next-auth/react"

export default async function HomePage() {
  // const session = await getServerSession()
  // const session = await getSession()

  const response = await getServerSession(authOptions)

  console.log(response, "frm login page")

  // console.log(session, "from useSession and homepage")

  // console.log(session, "session from homepage")
  // console.log(session, "getServerSession from homepage")

  return (
    <div className="text-center">
      <p className="text-3xl">This is a home page.</p>
      <p>Only Logged In Users can have access</p>
    </div>
  )
}
