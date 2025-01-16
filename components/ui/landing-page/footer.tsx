import Image from "next/image";
import Link from "next/link";

import { Github, Twitter } from "lucide-react";

import DiscordIcon from "@/assests/discord.svg";

export default function Footer() {
  return (
    <footer className="relative z-20 mt-20 py-8 text-white">
      <div className="container mx-auto space-y-8 px-4">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">Community</h2>
          <p className="text-base text-gray-400 md:text-lg">
            Get involved in our community. Everyone is welcome!
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 md:mt-12 md:flex-row md:items-stretch md:justify-between md:gap-8">
          <Link
            href="https://x.com/trenduiofficial"
            target="_blank"
            className="group flex flex-1 flex-col rounded-lg bg-zinc-900 p-4 transition-colors hover:bg-zinc-800 md:p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <Twitter className="size-6" />
              <span className="font-semibold">X</span>
              <svg
                className="ml-auto size-4 opacity-0 transition-opacity group-hover:opacity-100"
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
            <p className="text-sm text-gray-400 md:text-base">
              For announcements, tips and general information.
            </p>
          </Link>

          <Link
            href="https://discord.com"
            target="_blank"
            className="group flex flex-1 flex-col rounded-lg bg-zinc-900 p-4 transition-colors hover:bg-zinc-800 md:p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <Image
                src={DiscordIcon}
                alt="Discord"
                width={24}
                height={24}
                className="text-white"
              />
              <span className="font-semibold">Discord</span>
              <svg
                className="ml-auto size-4 opacity-0 transition-opacity group-hover:opacity-100"
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
            <p className="text-sm text-gray-400 md:text-base">
              To get involved in the community, ask questions and share tips.
            </p>
          </Link>

          <Link
            href="https://github.com/trend-ui/trendui-react-native"
            target="_blank"
            className="group flex flex-1 flex-col rounded-lg bg-zinc-900 p-4 transition-colors hover:bg-zinc-800 md:p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <Github className="size-6" />
              <span className="font-semibold">Github</span>
              <svg
                className="ml-auto size-4 opacity-0 transition-opacity group-hover:opacity-100"
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
            <p className="text-sm text-gray-400 md:text-base">
              To report bugs, request features and contribute to the project.
            </p>
          </Link>
        </div>

        <div className="pt-6 text-center text-sm text-gray-400 md:pt-8">
          © {new Date().getFullYear()} TrendUI All rights reserved.
        </div>
      </div>
    </footer>
  );
}
