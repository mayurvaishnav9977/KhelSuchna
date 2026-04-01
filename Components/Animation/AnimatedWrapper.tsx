// src/components/animation/MotionWrapper.tsx
"use client";
import { motion } from "framer-motion";
import { fadeIn, slideIn, scaleUp ,slideFromBottom} from "@/lib/animationVariants";

type MotionWrapperProps = {
  children: React.ReactNode;
  variant?: "fade" | "slide" | "scale" |"bottom";
};

export const AnimationWrapper = ({ children, variant = "bottom" }: MotionWrapperProps) => {
  const variantsMap = {
    fade: fadeIn,
    slide: slideIn,
    scale: scaleUp,
        bottom: slideFromBottom,
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={variantsMap[variant]}>
      {children}
    </motion.div>
  );
};
