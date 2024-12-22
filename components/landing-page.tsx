"use client";
import { motion } from "framer-motion";
import { Copy, Github, Search } from "lucide-react";
import { useState } from "react";
import AvatarCircles from "./ui/landing-page/avatars";
import Call from "./ui/landing-page/call";
import Counter from "./ui/landing-page/counter";
import Features from "./ui/landing-page/feature-section";
import Footer from "./ui/landing-page/footer";
import Liquid from "./ui/landing-page/liquid-buttons";
import LoadingButton from "./ui/landing-page/loading-button";
import Notch from "./ui/landing-page/notch";
import NotificationBell from "./ui/landing-page/notification-bell";
import Pagination from "./ui/landing-page/pagination";
import ProductCard from "./ui/landing-page/product-card";
import { AnimatedCircularProgressBar } from "./ui/landing-page/progress";
import TooggleSwitch from "./ui/landing-page/toggle-switch";
import Image from "next/image";
import Mesh from "../public/mesh.svg";
import Background from "./ui/landing-page/background";
import Link from "next/link";
import Header from "./header/header";

export function LandingPage() {
  const [isChecked, setIsChecked] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("npm i @trendui/react-native");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };
  return (
    <div className="landing-background min-h-screen  bg-black text-white relative overflow-hidden">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-28 flex justify-between h-[70vh]">
        {/* intro */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
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
          <p className="text-xl text-zinc-400 mb-8">
            Supports both Tailwind CSS and traditional Stylesheets.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/docs/introduction">
              <button className="bg-gradient-to-r from-orange-600 to-red-700 hover:bg-blue-700 text-white rounded-full px-6 py-2 font-medium">
                Get Started →
              </button>
            </Link>
            <div className="flex items-center gap-2 bg-zinc-900 rounded-lg px-4 py-2">
              <span className="font-mono text-sm">
                $ npm i @trendui/react-native
              </span>
              <button className="text-zinc-400 hover:text-white">
                <Copy className="w-4 h-4" onClick={() => handleCopy()} />
              </button>
            </div>
            {copied && <span className="text-sm text-green-500">Copied!</span>}
          </div>
        </div>

        {/* Floating UI Elements */}
        <div className="relative flex-1">
          <AnimatedCircularProgressBar className="absolute top-0 left-32" />
          <div className="flex justify-end gap-4 right-[0]">
            <LoadingButton className="" />
            <NotificationBell className="" />
            <TooggleSwitch className="" />
          </div>

          <Call className="absolute top-[350px] right-0" />
          <ProductCard className="absolute top-[130px] left-[50%]" />
          <AvatarCircles className="absolute right-0 top-[130px]" />
          <Pagination className="absolute right-[-60px] top-[200px]" />
          <Counter className="absolute top-[265px] right-6" />
          <Liquid className="absolute top-[220px] left-0" />
          <Notch className="absolute top-[350px] left-[-50px]" />
        </div>
      </main>

      {/* featuer section */}
      <Features />

      {/* footer */}
      <Footer />

      {/* Background Gradient */}
      <div className="absolute  bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-purple-500/20 to-transparent"></div>
    </div>
  );
}
