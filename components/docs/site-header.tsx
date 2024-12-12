import Link from "next/link";
import { Code2 } from "lucide-react";

import { MobileNav } from "@/components/docs/mobile-nav";
import { ModeToggle } from "@/components/docs/mode-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center h-14 px-4 sm:px-6 lg:px-8">
        {/* Mobile Navigation */}
        <MobileNav />
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              
              <span className="hidden sm:inline-block font-bold">trendui</span>
            </Link>
          </div>
          
          <nav className="flex items-center space-x-4">
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
