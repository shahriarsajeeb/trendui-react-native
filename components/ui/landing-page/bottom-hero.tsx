import Image from "next/image";
import Link from "next/link";

import ReactIcon from "../../../public/react.svg";

export default function BottomHero() {
  return (
    <div className="bg-transparent p-8 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row">
          <div className="w-full space-y-3 md:w-1/2 md:space-y-8">
            <h1 className="inline text-[clamp(1rem,10vw,2rem)] font-semibold tracking-tight sm:text-[clamp(1rem,10vw,3rem)] lg:text-5xl">
              Make the Mobile Apps
              <span className="block bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                Prettier
              </span>
            </h1>

            <div className="flex items-stretch gap-4">
              <Link href="/docs/introduction">
                <button className="rounded-full bg-gradient-to-r from-orange-600 to-red-700 px-6 py-2 font-medium text-white hover:bg-blue-700">
                  Get Started →
                </button>
              </Link>
              <Link
                href={"https://github.com/trend-ui/trendui-react-native"}
                className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-900"
              >
                <svg
                  className="mr-2 size-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Github
              </Link>
            </div>
          </div>

          <div className="mt-5 flex flex-col items-stretch gap-5 md:flex-row md:items-center md:gap-10">
            <div className="relative h-40 flex-1 overflow-hidden rounded-xl bg-purple-950/20 p-6 backdrop-blur-2xl backdrop-saturate-[1.8]">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-lg">
                  <svg
                    className="size-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-white">
                  Getting Started
                </h2>
              </div>
              <p className="mt-4 text-sm text-zinc-400">
                Build cool applications
              </p>
            </div>

            <div className="relative h-40 flex-1 overflow-hidden rounded-xl bg-purple-950/20 p-6 backdrop-blur-2xl backdrop-saturate-[1.8]">
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-lg">
                  <Image src={ReactIcon} width={24} height={24} alt="react" />
                </div>
                <h2 className="text-xl font-semibold text-white">
                  Expo + React Native
                </h2>
              </div>
              <p className="mt-4 text-sm text-zinc-400">
                Trend UI is fully compatible with both old and new
                architectures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
