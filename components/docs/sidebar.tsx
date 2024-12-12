"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Search } from "@/components/docs/search";
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
    name: "Components",
    href: "#components",
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
    <div className="flex h-full flex-col p-4 sm:p-6 lg:p-8">
      <div className="mb-4 sm:mb-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl sm:text-2xl lg:text-3xl text-neutral-300 font-bold">TRENDUI</span>
        </Link>
      </div>
      <nav className="mt-4 flex-1 space-y-2">
        <Search />
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Button
              key={item.name}
              variant={isActive ? "secondary" : "ghost"}
              className={cn(
                "w-full p-4 sm:p-5 lg:p-6 justify-start shadow-lg rounded-lg border-2 dark:border-none dark:bg-neutral-900 dark:hover:bg-neutral-800",
                isActive ? "bg-accent" : "hover:bg-accent/50"
              )}
              asChild
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">{item.name}</span>
              </Link>
            </Button>
          );
        })}
      </nav>
    </div>
  );
}
