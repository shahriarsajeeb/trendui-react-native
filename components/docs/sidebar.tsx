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
import { useState } from "react";

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

const GETTING_STARTED = [
  {
    name: "Getting Started",
    subcategories: ["Introduction", "Installation", "Documentation"],
  },
];
const CATEGORIES = [
  {
    name: "Components",
    subcategories: [
      { name: "Button", isNew: false },
      { name: "Input", isNew: false },
      { name: "Image", isNew: false },
      { name: "Select", isNew: false },
    ],
  },
  {
    name: "Sponsor",
    subcategories: [{ name: "Sponsor", isNew: false }],
  },
];
function normalizeURL(url: string): string {
  return url.replace(/\s+/g, "-");
}

export function Sidebar() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  return (
    <div className="flex h-full flex-col p-4 sm:p-6 lg:p-8">
      <div className="mb-4 sm:mb-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl sm:text-2xl lg:text-3xl text-neutral-300 font-bold">
            TRENDUI
          </span>
        </Link>
      </div>
      <Search />

      {/* <nav className="mt-4 flex-1 space-y-2">
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
      </nav> */}
      {GETTING_STARTED.map(
        (category: { name: string; subcategories: string[] }) => {
          return (
            <div key={category.name} className="mb-5">
              <h1 className="text-md mb-3 font-geistSemiBold">
                {category.name}
              </h1>
              <ul className="ml-2 space-y-2">
                {category.subcategories.map((subcategory: string) => (
                  <li
                    key={subcategory}
                    onClick={() => setActive(!active)}
                    className="w-max border-gray-500 px-3 text-sm text-gray-500 transition-colors duration-300 hover:border-l-2"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setActive(!active);
                      }
                    }}
                  >
                    <Link
                      href={`/docs/${normalizeURL(subcategory.toLowerCase())}`}
                      className={({ isActive }) =>
                        isActive
                          ? "text-black dark:text-white"
                          : "border-gray-700"
                      }
                    >
                      {subcategory}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
      )}
      {CATEGORIES.map((category) => {
        return (
          <div key={category.name} className="mb-5">
            <h1 className="text-md mb-3 font-geistSemiBold">{category.name}</h1>
            <ul className="ml-2 space-y-2">
              {category.subcategories.map((subcategory) => {
                return (
                  <li
                    key={subcategory.name}
                    onClick={() => setActive(!active)}
                    className="flex w-max cursor-pointer gap-x-3 border-gray-500 px-3 text-sm text-gray-500 transition-colors duration-300 hover:border-l-2"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setActive(!active);
                      }
                    }}
                  >
                    <Link
                      href={`/docs/${category.name.toLowerCase()}/${normalizeURL(
                        subcategory.name.toLowerCase()
                      )}`}
                      className={({ isActive }) =>
                        isActive
                          ? "text-black dark:text-white"
                          : "border-gray-700"
                      }
                    >
                      {subcategory.name}
                    </Link>
                    {subcategory.isNew && (
                      <p className="-py-2 flex items-center justify-center rounded-md border border-green-300 bg-green-300/20 px-3 text-xs leading-none text-green-300">
                        new
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
