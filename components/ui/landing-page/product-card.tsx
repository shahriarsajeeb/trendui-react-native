import Image from "next/image";

import { motion } from "framer-motion";

import VR from "@/assests/vr.jpg";
import { cn } from "@/lib/utils";

export default function ProductCard({ className }: { className: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className={cn(
        "flex h-36 w-36 flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-green-400 to-purple-500",
        className,
      )}
    >
      <Image src={VR} alt="vr" className="rounded-2xl object-cover" />
    </motion.div>
  );
}
