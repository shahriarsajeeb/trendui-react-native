import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import { DiscIcon as Discord } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold">Community</h2>
          <p className="text-gray-400 text-lg">
            Get involved in our community. Everyone is welcome!
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* X Card */}
          <Link
            href="https://x.com"
            target="_blank"
            className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-4">
              <Twitter className="w-6 h-6" />
              <span className="font-semibold">X</span>
              <svg
                className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-gray-400">
              For announcements, tips and general information.
            </p>
          </Link>

          {/* Discord Card */}
          <Link
            href="https://discord.com"
            target="_blank"
            className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-4">
              <Discord className="w-6 h-6" />
              <span className="font-semibold">Discord</span>
              <svg
                className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-gray-400">
              To get involved in the community, ask questions and share tips.
            </p>
          </Link>

          {/* GitHub Card */}
          <Link
            href="https://github.com"
            target="_blank"
            className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-4">
              <Github className="w-6 h-6" />
              <span className="font-semibold">Github</span>
              <svg
                className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-gray-400">
              To report bugs, request features and contribute to the project.
            </p>
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm pt-8">
          © {new Date().getFullYear()} TrendUI All rights reserved.
        </div>
      </div>
    </footer>
  );
}
