import Link from "next/link"
import React from "react"
import { twMerge } from "tailwind-merge"
import { NavItemsType } from "./header"

type NavMenuProps = {
  className?: string
  navItems?: NavItemsType
  setSheetOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavMenu({ className, navItems = [], setSheetOpen }: NavMenuProps) {
  return (
    <ul className={twMerge("flex border-gray-400", className)}>
      {navItems.map((navItem) => (
        <li
          key={navItem.link}
          className="p-4 xl:px-4 xl:py-1"
          onClick={() => (setSheetOpen ? setSheetOpen(false) : "")}
        >
          <Link
            href={navItem.link}
            className="inline-block w-full h-full"
          >
            {navItem.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
