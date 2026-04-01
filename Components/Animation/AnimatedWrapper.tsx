"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { fadeIn, slideIn, scaleUp, slideFromBottom } from "@/lib/animationVariants";

type VariantType = "fade" | "slide" | "scale" | "bottom";

type MotionWrapperProps = {
  children: React.ReactNode;
  variant?: VariantType;
};

const variantsMap: Record<VariantType, Variants> = {
  fade: fadeIn,
  slide: slideIn,
  scale: scaleUp,
  bottom: slideFromBottom,
};

export const AnimationWrapper = ({ children, variant = "bottom" }: MotionWrapperProps) => {
  return (
    <motion.div initial="hidden" animate="visible" variants={variantsMap[variant]}>
      {children}
    </motion.div>
  );
};