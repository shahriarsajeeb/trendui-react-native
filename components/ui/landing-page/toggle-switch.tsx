import { useState } from "react";
import { motion } from "framer-motion";

export default function TooggleSwitch() {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <motion.label
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
      className="flex cursor-pointer select-none items-center"
    >
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <div
          className={`box block h-8 w-14 rounded-full ${
            isChecked ? "bg-green-600" : "bg-gray-500"
          }`}
        ></div>
        <div
          className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
            isChecked ? "translate-x-full" : ""
          }`}
        ></div>
      </div>
    </motion.label>
  );
}
