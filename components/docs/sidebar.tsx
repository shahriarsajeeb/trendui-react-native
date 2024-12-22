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
import { useEffect, useState } from "react";
import useSidebarChange from "@/hooks/useSidebarChange";

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
    subcategories: ["Introduction", "Installation", "CLI"],
  },
];

function normalizeURL(url: string): string {
  return url.replace(/\s+/g, "-");
}

export function Sidebar() {
  const [loader, setLoader] = useState(true);
  const pathName = usePathname();
  const { activeRoute, setActiveRoute } = useSidebarChange();
  const [componentsData, setcomponentsData] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    getComponentsData();
  }, []);

  useEffect(() => {
    let active = pathName;

    if (pathName.includes("/docs/components")) {
      active = pathName.split("/docs/components/")[1];
    } else if (pathName.includes("/docs")) {
      active = pathName.split("/docs/")[1];
    }

    setActiveRoute(active);
  }, [pathName, setActiveRoute]);

  const getComponentsData = async () => {
    const repoOwner = "trend-ui";
    const repoName = "trendui-react-native";
    const path = "src/components";

    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`;

    try {
      const res = await fetch(url, {
        // headers: {
        //   // Include a GitHub personal access token if you hit rate limits
        //   // Authorization: `token YOUR_PERSONAL_ACCESS_TOKEN`,
        // },
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch component list: ${res.statusText}`);
      }

      const data = await res.json();
      const components = data
        .filter((item: any) => item.type === "dir") // Ensure it's a directory (component folder)
        .map((folder: any) => ({ name: folder.name, isNew: false }));
      setcomponentsData(components);
      setLoader(false);
    } catch (error) {
      console.error("Error fetching component list:", error);
      return [];
    }
  };

  const CATEGORIES = [
    {
      name: "Components",
      subcategories: componentsData,
    }
  ];

  return (
    <div className="flex h-full flex-col p-4 sm:p-6 lg:p-8">
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
              <ul className="ml-1 space-y-2">
                {category.subcategories.map((subcategory: string) => (
                  <li
                    key={subcategory}
                    onClick={() => setActive(!active)}
                    className={`flex w-max cursor-pointer gap-x-1  px-1 text-sm ${
                      activeRoute === subcategory.toLocaleLowerCase()
                        ? "border-white"
                        : "border-gray-500"
                    } text-gray-500 transition-colors duration-300 hover:border-l-2`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setActive(!active);
                      }
                    }}
                  >
                    <Link
                      href={`/docs/${normalizeURL(subcategory.toLowerCase())}`}
                      className={`${
                        activeRoute === subcategory.toLowerCase()
                          ? "text-white border-white"
                          : "border-gray-700"
                      }`}
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
      {loader ? (
        <div className="w-[90%]  h-[40vh] flex items-center justify-center">
          <div className="border-gray-300 h-8 w-8 animate-spin rounded-full border-2 border-t-blue-600" />
        </div>
      ) : (
        <>
          {CATEGORIES.map((category) => {
            return (
              <div key={category.name} className="mb-5">
                <h1 className="text-md mb-3 font-geistSemiBold">
                  {category.name}
                </h1>
                <ul className="ml-1 space-y-2">
                  {category.subcategories.map((subcategory:any) => {
                    return (
                      <li
                        key={subcategory.name}
                        onClick={() => setActive(!active)}
                        className={`flex w-max cursor-pointer gap-x-1 px-1 text-sm ${
                          activeRoute === subcategory.name
                            ? "border-white"
                            : "border-gray-500"
                        } text-gray-500 transition-colors duration-300 hover:border-l-2`}
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
                          className={`${
                            activeRoute === subcategory.name
                              ? "text-white border-white"
                              : "border-gray-700"
                          }`}
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
        </>
      )}
    </div>
  );
}
