"use client";

import Link from "next/link";
import { useState } from "react";

import { motion } from "framer-motion";
import { Copy } from "lucide-react";

import Header from "./header/header";
import BottomHero from "./ui/landing-page/bottom-hero";
import FeatureDescription from "./ui/landing-page/feature-description";
import Features from "./ui/landing-page/feature-section";
import Footer from "./ui/landing-page/footer";

export function LandingPage() {
  const [isChecked, setIsChecked] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("npm i @trendui/react-native");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };
  return (
    <div className="landing-background relative min-h-screen bg-black text-white">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <main className="container mx-auto flex h-[70vh] justify-between px-4 pt-28">
        {/* intro */}
        <div className="flex flex-1 flex-col justify-center text-center leading-8 md:text-left md:leading-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline text-5xl text-[clamp(1rem,10vw,2rem)] font-bold tracking-tight sm:text-[clamp(1rem,10vw,3rem)] lg:text-5xl"
          >
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Modern
            </span>
            ,
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Lightweight
            </span>{" "}
            UI library for React Native
          </motion.h1>
          <p className="mb-8 text-xl text-zinc-400">
            Supports both Tailwind CSS and traditional Stylesheets.
          </p>
          <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center">
            <Link href="/docs/introduction">
              <button className="w-full rounded-full bg-gradient-to-r from-orange-600 to-red-700 px-6 py-2 font-medium text-white hover:bg-blue-700">
                Get Started →
              </button>
            </Link>
            <div className="hidden items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 md:flex">
              <span className="font-mono text-sm">
                $ npm i @trendui/react-native
              </span>
              <button className="text-zinc-400 hover:text-white">
                <Copy className="size-4" onClick={() => handleCopy()} />
              </button>
            </div>
            {copied && <span className="text-sm text-green-500">Copied!</span>}
          </div>
        </div>

        {/* Floating UI Elements */}
       
      </main>

      {/* featuer section */}
      <Features />

      {/* <section className="container mx-auto min-h-screen">
        <div className="sticky top-[100px] flex">
          <div>
            <div>Effortless customization</div>
            <div>Sane defaults</div>
            <div>Easy Theming</div>
            <div>Standout Design </div>
            <div>Easy Installation </div>
            <div>Move fast </div>
            <div>Works seamless with Expo and react-native-cli </div>
          </div>
          <div className="flex-1 bg-red-950">
            <p>
              Effortely cusstomize whateever components you want Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Recusandae sint
              quidem ex alias hic adipisci totam consequatur corporis, dolor,
              sequi facilis iure pariatur beatae assumenda eveniet. Eum nemo
              reprehenderit eveniet.
            </p>
          </div>
          <div className="flex-1 bg-red-950">
            <p>
              Sane defaults Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Recusandae sint
              quidem ex alias hic adipisci totam consequatur corporis, dolor,
              sequi facilis iure pariatur beatae assumenda eveniet. Eum nemo
              reprehenderit eveniet.
            </p>
          </div>
          <div className="flex-1 bg-red-950">
            <p>
              Easy theming Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Recusandae sint
              quidem ex alias hic adipisci totam consequatur corporis, dolor,
              sequi facilis iure pariatur beatae assumenda eveniet. Eum nemo
              reprehenderit eveniet.
            </p>
          </div>
          <div className="flex-1 bg-red-950">
            <p>
              Standout design Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Recusandae sint
              quidem ex alias hic adipisci totam consequatur corporis, dolor,
              sequi facilis iure pariatur beatae assumenda eveniet. Eum nemo
              reprehenderit eveniet.
            </p>
          </div>
          <div className="flex-1 bg-red-950">
            <p>
              Easy installation you want Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Recusandae sint
              quidem ex alias hic adipisci totam consequatur corporis, dolor,
              sequi facilis iure pariatur beatae assumenda eveniet. Eum nemo
              reprehenderit eveniet.
            </p>
          </div>
          <div className="flex-1 bg-red-950">
            <p>
              Move fast Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Recusandae sint
              quidem ex alias hic adipisci totam consequatur corporis, dolor,
              sequi facilis iure pariatur beatae assumenda eveniet. Eum nemo
              reprehenderit eveniet.
            </p>
          </div>
        </div>
      </section> */}

      <FeatureDescription />
      <BottomHero />

      {/* footer */}
      <Footer />

      {/* Background Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-purple-500/20 to-transparent"></div>
    </div>
  );
}
