"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Heart, House, Search, Settings } from "lucide-react";
import { useState } from "react";

const Liquid = ({ className }: { className: string }) => {
  const links = [
    { label: "home", icon: <House /> },
    { label: "search", icon: <Search /> },
    { label: "favourites", icon: <Heart /> },
    { label: "settings", icon: <Settings /> },
  ];
  const [currentLink, setCurrentLink] = useState(0);
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, y: 0 }}
      animate={{
        opacity: 1,
        x: 0,
        y: [0, -10, 0], // Bounce up and down
      }}
      transition={{
        delay: 0.3,
        y: {
          duration: 4,
          repeat: Infinity, // Infinite bouncing
          ease: "easeInOut", // Smooth back and forth
        },
      }}
      className={cn(" w-[150px] h-full center ", className)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="absolute"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="12"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
      <motion.ul
        style={{
          filter: "url(#goo)",
        }}
        layout
        className="flex w-[150px]"
      >
        {links.map((link, index) => (
          <motion.li
            key={index}
            onClick={() => setCurrentLink(index)}
            animate={{
              x: [20, -20],
            }}
            className={cn(
              "bg-black text-white p-3  h-full items-center mx-0 transition-all duration-500 cursor-pointer justify-center flex capitalize font-bold",
              currentLink === index && "bg-blue-500 mx-7"
            )}
          >
            <div className="flex flex-col gap-1 justify-center items-center text-xs">
              {link.icon}
              {link.label}
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Liquid;
