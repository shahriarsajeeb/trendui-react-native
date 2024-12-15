import { motion } from "framer-motion";

export default function InputNext() {
  return (
    <motion.div
      initial={{
        opacity: 1, // Start fully visible
        x: 20, // Start 20px to the right
      }}
      animate={{
        x: 0, // Slide back to original position
        y: [0, -20, 0], // Moves up 20 pixels and back down
        transition: {
          x: {
            duration: 0.5, // Quick slide-in
            delay: 0.4, // Slight initial delay
          },
          y: {
            duration: 5, // Slower vertical movement
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
      }}
      className="bg-zinc-900 p-4 rounded-xl w-1/3"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black font-medium">
          UI
        </div>
        <input
          className="bg-black border border-zinc-800 text-white rounded-lg px-3 py-1 w-full"
          value="NextUI"
          readOnly
        />
      </div>
    </motion.div>
  );
}
