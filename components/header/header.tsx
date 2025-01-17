"use client";

import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

import {
  ChevronRight,
  Component,
  FileText,
  Github,
  Home,
  Menu,
  Search,
  X,
} from "lucide-react";

import Navbar from "./navbar";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [stars, setStars] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [componentsData, setComponentsData] = useState<{ name: string }[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // 1) Fetch the star count
    fetch("https://api.github.com/repos/trend-ui/trendui-react-native")
      .then((response) => response.json())
      .then((data) => setStars(data.stargazers_count))
      .catch((error) => console.error("Error fetching repo data:", error));
  }, []);

  useEffect(() => {
    // 2) Fetch the list of components
    getComponentsData();
  }, []);

  async function getComponentsData() {
    const repoOwner = "trend-ui";
    const repoName = "trendui-react-native";
    const path = "src/components";
    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`;

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Failed to fetch component list: ${res.statusText}`);
      }
      const data = await res.json();
      // Filter for directories only, map to name
      const components = data
        .filter((item: any) => item.type === "dir")
        .map((folder: any) => ({ name: folder.name }));
      setComponentsData(components);
    } catch (error) {
      console.error("Error fetching component list:", error);
    }
  }

  const handleOpenMenu = () => {
    setMobileMenuOpen(true);
  };
  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
  };

  // 3) Filter components based on searchTerm (case-insensitive)
  const filteredComponents = componentsData.filter((comp) =>
    comp.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-transparent px-4 pt-2 backdrop-blur-xl">
      <div className="mx-auto w-full md:w-[97%]">
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="relative flex items-center gap-4">
            <span className="text-2xl">TrendUI</span>
            <svg
              width="63"
              height="12"
              viewBox="0 0 63 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-12 top-6"
            >
              <path
                d="M62.9413 3.19944C63.2504 4.59437 62.2866 5.43469 61.2658 6.01031C60.2898 6.56492 59.1511 6.97667 58.049 7.09852C53.0062 7.64052 47.9146 7.81698 42.9084 8.59008C38.3048 9.30015 33.7582 10.4892 29.24 11.6825C26.4014 12.4303 24.4981 11.9345 23.4123 9.36317C22.9771 8.33378 23.0178 7.07751 22.9121 5.91366C22.8429 5.15738 22.8999 4.38849 22.8999 3.3465C20.9356 3.90951 19.1178 4.24984 17.4382 4.9473C12.6557 6.93886 7.93008 9.07326 3.18009 11.1531C1.95192 11.6909 0.479749 11.2203 0.109673 10.1741C-0.27667 9.08587 0.37808 8.14471 1.75265 7.56489C5.25414 6.09433 8.67023 4.38009 12.2368 3.11121C15.7383 1.86754 19.3577 0.934778 22.9731 0.0986609C25.1529 -0.40553 26.4949 1.06923 26.4095 3.45994C26.3688 4.64058 26.2875 5.81703 26.2631 6.99768C26.2387 8.16993 26.7552 8.51025 27.8817 8.21194C35.9949 6.05232 44.226 4.73302 52.6117 4.35908C56.0115 4.20782 59.3951 3.6154 62.9373 3.20364L62.9413 3.19944Z"
                fill="url(#paint0_linear_3_7)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3_7"
                  x1="0"
                  y1="6"
                  x2="63"
                  y2="6"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#BE6C0F" />
                  <stop offset="1" stopColor="#E00025" />
                </linearGradient>
              </defs>
            </svg>
          </Link>

          <div className="flex items-stretch gap-3 md:gap-6">
            <div className="hidden md:flex">
              <Navbar />
            </div>

            {/* Search trigger */}
            <div
              className="flex cursor-pointer items-center gap-2 rounded-full bg-zinc-900 px-3 py-1.5"
              onClick={() => setOpen(true)}
            >
              <Search className="size-4 text-zinc-400" />
              <div className="hidden min-w-16 border-none bg-transparent text-zinc-400 outline-none focus:border-none focus:outline-none md:block">
                Search
              </div>
              <kbd className="hidden rounded bg-zinc-800 px-1.5 text-xs md:block">
                ⌘K
              </kbd>
            </div>

            {/* GitHub link + star count */}
            <Link
              href="https://github.com/trend-ui/trendui-react-native"
              className="flex items-center gap-1 rounded-full bg-zinc-900 px-3 py-1.5 text-zinc-400 hover:text-white"
            >
              <button>
                <Github className="size-5" />
              </button>
              <span className="text-sm">{stars}</span>
            </Link>

            {/* Mobile Menu Toggle */}
            {!mobileMenuOpen && (
              <button
                onClick={handleOpenMenu}
                className="block md:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-6 text-zinc-400" />
              </button>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={handleCloseMenu}
        />
      )}

      {/* Mobile menu sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-[60] h-screen w-screen bg-black p-6 backdrop-blur-xl transition-transform duration-300 ease-in-out md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col space-y-2">
          <div className="flex justify-end">
            <button
              onClick={handleCloseMenu}
              className="rounded-full p-2 hover:bg-zinc-800"
              aria-label="Close menu"
            >
              <X className="size-6 text-zinc-400" />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg text-zinc-200 hover:text-white"
              onClick={handleCloseMenu}
            >
              <Home className="size-5" />
              Home
            </Link>
            <Link
              href="/docs/introduction"
              className="flex items-center gap-2 text-lg text-zinc-200 hover:text-white"
              onClick={handleCloseMenu}
            >
              <FileText className="size-5" />
              Documentation
            </Link>
            <Link
              href="/components"
              className="flex items-center gap-2 text-lg text-zinc-200 hover:text-white"
              onClick={handleCloseMenu}
            >
              <Component className="size-5" />
              Components
            </Link>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[999999] flex h-screen items-center justify-center bg-black/70 p-4"
          onClick={(e) => {
            // If user clicks the backdrop (not the child), close
            if (e.target === e.currentTarget) {
              setOpen(false);
            }
          }}
        >
          <div className="relative w-full max-w-lg rounded-lg bg-zinc-900 text-sm text-white shadow-lg">
            {/* Search Header */}
            <div className="border-b border-zinc-800 px-4 py-3">
              <input
                type="text"
                value={searchTerm}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSearchTerm(e.target.value)
                }
                placeholder="Search components"
                className="w-full rounded-md bg-zinc-800 p-3 text-[16px] text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
              />
            </div>

            {/* Components List */}
            <div className="px-4 py-3">
              <ul className="space-y-1">
                {filteredComponents.length > 0 ? (
                  filteredComponents.map((component) => (
                    <li key={component.name}>
                      <Link
                        href={`/docs/components/${component.name}`}
                        onClick={() => setOpen(false)} // close modal on select
                        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left hover:bg-zinc-800"
                      >
                        <span className="text-sm text-zinc-200">
                          {component.name}
                        </span>
                        <ChevronRight className="size-4 text-zinc-500" />
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <div className="px-3 py-2 text-center text-xs text-zinc-400">
                      No components found
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
