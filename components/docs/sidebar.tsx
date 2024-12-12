"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
// import { Search } from "@/components/docs/search";
import {
  Hand,
  FileText,
  BookOpen,
  HelpCircle,
  ArrowDownToLine,
} from "lucide-react";

const navigation = [
  {
    name: "Introduction",
    href: "#",
    icon: Hand,
  },
  {
    name: "Installation",
    href: "#installation",
    icon: ArrowDownToLine,
  },
  {
    name: "Documentation",
    href: "#docs",
    icon: FileText,
  },
  {
    name: "Tutorial",
    href: "#tutorial",
    icon: BookOpen,
  },
  {
    name: "Sponsor",
    href: "#sponsor",
    icon: HelpCircle,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col p-6 sm:p-10 lg:p-14">
      <div className="mb-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-4xl sm:text-6xl lg:text-9xl text-neutral-300 font-bold">Vint</span>
        </Link>
        <p className="mt-1 text-sm text-muted-foreground">Modern Programming made simple</p>
      </div>
      <nav className="mt-4 flex-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Button
              key={item.name}
              variant={isActive ? "secondary" : "ghost"}
              className={cn(
                "mb-3 w-full p-6 sm:p-6 justify-start shadow-lg rounded-lg border-2 dark:border-none dark:bg-neutral-900 dark:hover:bg-neutral-800",
                isActive ? "bg-accent" : "hover:bg-accent/50"
              )}
              asChild
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Link>
            </Button>
          );
        })}
      </nav>
      <div className="mt-auto space-y-2 text-xs text-muted-foreground">
        <p>Language by Tachera Sasi</p>
        <p>
          From <Link href="https://ekilie.com">ekilie</Link>
        </p>
      </div>
    </div>
  );
}
