"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { customTwm } from "@/utils/custom-tailwind-merge"
import { Menu } from "lucide-react"
import { getToken } from "next-auth/jwt"
import { useSession } from "next-auth/react"
import Link from "next/link"
import React, { useState } from "react"
import { twMerge } from "tailwind-merge"
import NavMenu from "../nav-menu"

const navItems = [
  { link: "/", name: "Home" },
  { link: "/about", name: "About" },
  { link: "/services", name: "Services" },
  { link: "/contact", name: "Contact" },
]

export type NavItemsType = typeof navItems

export default function Header() {
  const session = useSession()

  const [sheetOpen, setSheetOpen] = useState<boolean>(false)

  return (
    <div className="container">
      <div className="py-4 flex items-center justify-between">
        <div>
          <p className="text-2xl text-blue-200 px-8 py-2 rounded-lg border-2 border-dashed border-white">Logo</p>
        </div>

        <div className="hidden xl:block">
          <NavMenu
            navItems={navItems}
            className="divide-x"
          />
        </div>

        <div className="hidden xl:flex items-center gap-2">
          <span className="rounded-full p-4 border border-white whitespace-nowrap size-12 flex items-center justify-center">
            PP
          </span>
          <span>&lt;UserProfile /&gt;</span>
        </div>

        <div className="xl:hidden">
          <Sheet
            open={sheetOpen}
            onOpenChange={setSheetOpen}
          >
            <SheetTrigger asChild>
              <button className="p-2 border-2 rounded-md border-gray-400">
                <Menu size={24} />
              </button>
            </SheetTrigger>

            <SheetContent
              className="border-none xl:hidden"
              overlayClassName="xl:hidden"
            >
              <NavMenu
                className="flex-col divide-y"
                navItems={navItems}
                setSheetOpen={setSheetOpen}
              />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}
