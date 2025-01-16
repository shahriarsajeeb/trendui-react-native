import { motion } from "framer-motion";

export default function NotificationBell({
  className,
}: {
  className?: string;
}) {
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
      className="relative rounded-lg bg-teal-100 p-2"
    >
      <svg
        className="animate-wiggle size-8 text-teal-600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 21 21"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.585 15.5H5.415A1.65 1.65 0 0 1 4 13a10.526 10.526 0 0 0 1.5-5.415V6.5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.085c0 1.907.518 3.78 1.5 5.415a1.65 1.65 0 0 1-1.415 2.5zm1.915-11c-.267-.934-.6-1.6-1-2s-1.066-.733-2-1m-10.912 3c.209-.934.512-1.6.912-2s1.096-.733 2.088-1M13 17c-.667 1-1.5 1.5-2.5 1.5S8.667 18 8 17"
        />
      </svg>
      <div className="absolute -end-1 -top-2 min-w-5 translate-x-1/4 text-nowrap rounded-full bg-teal-500 px-1 py-0.5 text-center text-xs text-white">
        <div className="absolute start-0 top-0 -z-10 size-full animate-ping rounded-full bg-teal-200"></div>
        3
      </div>
    </motion.div>
  );
}
