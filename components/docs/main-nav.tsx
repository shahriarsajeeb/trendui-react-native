"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">VintLang</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Documentation
        </Link>
        <Link
          href="/docs/tutorial"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/tutorial")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Tutorial
        </Link>
        <Link
          href="/docs/support"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/support")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Support
        </Link>
      </nav>
    </div>
  )
}

