"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { MicOff, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const initialCallUsers = [
  {
    name: "Le Baller",
    role: "CEO",
    image: "https://avatar.iran.liara.run/public/4",
    id: 1,
  },
  {
    name: "Romanus",
    role: "Backend lead",
    image: "https://avatar.iran.liara.run/public/21",
    id: 2,
  },
  {
    name: "Frozen bird",
    role: "Project manager",
    image: "https://avatar.iran.liara.run/public/7",
    id: 3,
  },
  {
    name: "The !nvestor",
    role: "!nvestor",
    image: "https://avatar.iran.liara.run/public/26",
    id: 4,
  },
];

type Status = "idle" | "open" | "hovered";

const springTransition = {
  type: "spring",
  stiffness: 260,
  damping: 20,
};

export default function Call({ className }: { className: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [callUsers, setCallUsers] = useState(initialCallUsers); // Manage user state
  const isOpen = status === "open";

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    // Start timer if there are users in the call
    if (callUsers.length > 0) {
      timer = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer); // Cleanup timer on component unmount or user count change
    };
  }, [callUsers.length]); // Depend on user count to start/stop timer

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const renderUserProfiles = (stacked?: boolean, details?: boolean) =>
    callUsers.map((user) => (
      <div key={user.id} className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <motion.div
            layoutId={`userprofile-${user.id}`}
            className={cn(
              "size-10 rounded-full border-4 border-white dark:border-black border-b",
              {
                "-ml-3": stacked,
              }
            )}
            style={{
              backgroundImage: `url(${user.image || "default_image.jpg"})`,
              backgroundSize: "cover",
            }}
          />
          {details && (
            <div className="flex flex-col gap-1">
              <motion.h1
                layoutId={`username-${user.id}`}
                className="font-bold text-black dark:text-white"
              >
                {user.name}
              </motion.h1>
              <motion.p
                layoutId={`userrole-${user.id}`}
                className="text-muted-foreground text-sm"
              >
                {user.role}
              </motion.p>
            </div>
          )}
        </div>
      </div>
    ));

  return (
    <div className="rounded-lg  center">
      <motion.div
        className={cn(
          "flex gap-4 flex-col cursor-pointer bg-gray-900 shadow-md text-primary-foreground p-4 tracking-tight overflow-hidden ",
          className
        )}
        aria-expanded={isOpen}
        layout
        role="button"
        style={{ borderRadius: 22, width: 400 }}
        tabIndex={0}
        initial={{ opacity: 0, x: 20, y: 0 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -10, 0], // Bounce up and down
        }}
        transition={{
          delay: 0.3,
          y: {
            duration: 3,
            repeat: Infinity, // Infinite bouncing
            ease: "easeInOut", // Smooth back and forth
          },
        }}
      >
        <div className="text-muted-foreground flex items-center gap-2">
          <motion.div className="!size-6 !min-w-6 rounded-full bg-green-500 center">
            <Phone size={12} fill="white" strokeWidth={0} />
          </motion.div>
          <motion.span className="text-white">
            Active call . {formatTime(elapsedTime)}
          </motion.span>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ maxHeight: 0 }}
              animate={{ maxHeight: 1000 }}
              exit={{ maxHeight: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col gap-5 overflow-hidden"
            >
              {renderUserProfiles(false, true)}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          //   onClick={() => setStatus(isOpen ? "idle" : "open")}
          className="flex items-center justify-between"
        >
          <div className="flex flex-col gap-2">
            <motion.h1
              layoutId="call-company"
              className="font-bold text-gray-50 text-2xl"
            >
              Skale call
            </motion.h1>
          </div>
          <AnimatePresence>
            {!isOpen ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex"
              >
                {renderUserProfiles(true)}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={springTransition}
                className="flex gap-2"
              >
                <motion.button
                  layout
                  //   onClick={() => setStatus("idle")}
                  className="size-6 flex items-center justify-center rounded-full bg-muted"
                >
                  <X className="size-4 text-tight text-secondary-foreground" />
                </motion.button>
                <motion.button
                  layout
                  //   onClick={() => setStatus("idle")}
                  className="size-6 flex items-center justify-center rounded-full bg-muted"
                >
                  <MicOff className="size-4 text-tight text-secondary-foreground" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}
