"use client"

import { customTwm } from "@/utils/custom-tailwind-merge"
import { useSession } from "next-auth/react"
import React from "react"
import { twMerge } from "tailwind-merge"

export default function Header() {
  const { data } = useSession()
  // console.log(data, "from header")

  const customTwmValue = customTwm("text-primary text-big")
  console.log("from custom -> ", customTwmValue)

  const twMergeValue = twMerge("text-primary text-big")
  console.log("from default -> ", twMergeValue)

  return (
    <div className="container">
      <div className="flex justify-between">
        <p className={customTwmValue}>This is header</p>
        <p className={twMerge("border-2 border-primary px-2 pr-8")}>User (name)</p>
      </div>
    </div>
  )
}
