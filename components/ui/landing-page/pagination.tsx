import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
export default function Pagination({ className }: { className: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, y: 0 }}
      animate={{
        opacity: 1,
        x: 0,
        y: [0, -10, 0], // Bounce up and down
      }}
      transition={{
        delay: 0.5,
        y: {
          duration: 4,
          repeat: Infinity, // Infinite bouncing
          ease: "easeInOut", // Smooth back and forth
        },
      }}
      className={cn(
        "flex justify-end gap-1 bg-zinc-900 p-2 rounded-full  ",
        className
      )}
    >
      <button className="px-2 py-1 text-zinc-400 hover:text-white text-sm">
        1
      </button>
      <span className="text-zinc-400">...</span>
      <button className="px-2 py-1 text-zinc-400 hover:text-white text-sm">
        5
      </button>
      <button className="px-2 py-1 bg-blue-600 text-white rounded-full text-sm">
        6
      </button>
      <button className="px-2 py-1 text-zinc-400 hover:text-white text-sm">
        7
      </button>
      <span className="text-zinc-400">...</span>
      <button className="px-2 py-1 text-zinc-400 hover:text-white text-sm">
        10
      </button>
    </motion.div>
  );
}
