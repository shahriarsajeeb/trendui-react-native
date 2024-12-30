"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Github, Search } from "lucide-react";

import Navbar from "./navbar";

const Header = () => {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    // Fetch stars count from GitHub API
    fetch("https://api.github.com/repos/trend-ui/trendui-react-native")
      .then((response) => response.json())
      .then((data) => setStars(data.stargazers_count))
      .catch((error) => console.error("Error fetching repo data:", error));
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-transparent px-4 pt-2 backdrop-blur-xl">
      <div className="mx-auto w-full md:w-[97%]">
        <nav className="flex h-16 items-center justify-between">
          <Link href={"/"} className="relative flex items-center gap-4">
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
                  <stop stop-color="#BE6C0F" />
                  <stop offset="1" stop-color="#E00025" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
          <div className="flex items-center gap-6">
            <Navbar />
            <div className="flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1.5">
              <Search className="size-4 text-zinc-400" />
              <input
                type="search"
                placeholder="Search"
                className="border-none bg-transparent text-zinc-400 outline-none focus:border-none focus:outline-none"
              />
              <kbd className="rounded bg-zinc-800 px-1.5 text-xs">⌘K</kbd>
            </div>
            <Link
              href={"https://github.com/trend-ui/trendui-react-native"}
              className="flex items-center gap-1 rounded-full bg-zinc-900 px-3 py-1.5 text-zinc-400 hover:text-white"
            >
              <button>
                <Github className="size-5" />
              </button>
              <span className="text-sm">{stars}</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
