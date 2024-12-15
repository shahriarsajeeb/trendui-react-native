import { motion } from "framer-motion";
export default function NotificationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, y: 0 }}
      animate={{
        opacity: 1,
        x: 0,
        y: [0, -10, 0], // Bounce up and down
      }}
      transition={{
        delay: 0.4,
        y: {
          duration: 5,
          repeat: Infinity, // Infinite bouncing
          ease: "easeInOut", // Smooth back and forth
        },
      }}
      className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-xl w-1/2"
    >
      <div className="text-sm font-medium mb-2">Available soon</div>
      <button className="bg-white/10 hover:bg-white/20 text-white rounded-lg px-4 py-1 w-full text-sm">
        Notify me
      </button>
    </motion.div>
  );
}
