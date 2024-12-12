import Link from "next/link"
import { Code2 } from 'lucide-react'

// import { cn } from "@/lib/utils"
// import { buttonVariants } from "@/components/ui/button"
// import { MainNav } from "@/components/docs/main-nav"
import { MobileNav } from "@/components/docs/mobile-nav"
import { ModeToggle } from "@/components/docs/mode-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* <MainNav /> */}
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Code2 className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">VintLang</span>
            </Link>
          </div>
          <nav className="flex items-center">
            
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

