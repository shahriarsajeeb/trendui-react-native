"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
// @ts-ignore
import Ring from "../../../assests/ring.png";

const Notch = ({ className }: { className: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const presence = {
    enter: {
      opacity: 0,
      scale: 0.9,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    enter: {
      opacity: 0,
      y: 20,
    },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const handleToggle = () => {
    if (isOpen) {
      setShowContent(false);
    } else {
      setIsOpen(true);
      setTimeout(() => setShowContent(true), 50);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20, y: 0 }}
      animate={{
        opacity: 1,
        x: 0,
        y: [0, -10, 0], // Bounce up and down
      }}
      transition={{
        delay: 0.2,
        y: {
          duration: 6,
          repeat: Infinity, // Infinite bouncing
          ease: "easeInOut", // Smooth back and forth
        },
      }}
      className={cn("h-full center w-full ", className)}
    >
      <motion.div
        whileHover={{
          scale: isOpen ? 1 : 0.95,
        }}
        className={cn(
          "bg-primary w-[500px] rounded-full h-16 px-4 cursor-pointer bg-zinc-800",
          isOpen && "rounded-3xl"
        )}
        animate={{ height: isOpen ? 240 : 64, width: isOpen ? 500 : 300 }}
        transition={{ duration: 0.2 }}
        onClick={handleToggle}
      >
        <div
          className={cn(
            "flex items-center justify-between relative h-16 ",
            isOpen && "pt-5"
          )}
        >
          <p className="text-xl text-white">2(bkm)</p>
          <motion.div
            className="relative overflow-hidden rounded-3xl"
            animate={{
              height: isOpen ? 200 : 40,
              width: isOpen ? 200 : 40,
              y: isOpen ? 75 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={Ring}
              alt="Bossadi Zenith: I build things that live on the internet"
              fill
              className={cn(
                "transition-all duration-150 grayscale",
                isOpen && "grayscale-0"
              )}
            />
            <div
              className={cn(
                "absolute opacity-0 bg-black/50 top-0 left-0 flex items-center justify-center text-white font-semibold text-2xl h-full w-full transition-all duration-150",
                isOpen && "hover:opacity-100 "
              )}
            >
              Book a call
            </div>
          </motion.div>
        </div>
        <AnimatePresence onExitComplete={() => setIsOpen(false)}>
          {showContent && (
            <motion.ul
              initial="enter"
              animate="center"
              exit="exit"
              variants={presence}
              transition={{ duration: 0.2 }}
              className="mt-6 text-white"
            >
              {["Home", "About", "Contact"].map((item, index) => (
                <motion.li key={item + index} variants={itemVariants}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Notch;
