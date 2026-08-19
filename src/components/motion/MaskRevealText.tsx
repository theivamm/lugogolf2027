import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface MaskRevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down";
}

export function MaskRevealText({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: MaskRevealTextProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: direction === "up" ? "110%" : "-110%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: 0.9,
          ease: [0.76, 0, 0.24, 1],
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
