"use client";
import React, { ReactNode } from "react";

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  disabled?: boolean;
  className?: string;
  contentClassName?: string;
  arrowClassName?: string;
}

export default function Tooltip({
  content,
  children,
  position = "top",
  disabled = false,
  className = "",
  contentClassName = "",
  arrowClassName = "",
}: TooltipProps) {
  const classes = className.split(" ");
  const boxClasses = classes.filter(cls => cls.startsWith("box-")).map(cls => cls.replace("box-", "")).join(" ");
  const arrowClassesParsed = classes.filter(cls => cls.startsWith("arrow-")).map(cls => cls.replace("arrow-", "")).join(" ");
  const otherClasses = classes.filter(cls => !cls.startsWith("box-") && !cls.startsWith("arrow-")).join(" ");

  const finalBoxClasses = [boxClasses, otherClasses].filter(Boolean).join(" ");
  const finalArrowClasses = [arrowClassesParsed, arrowClassName].filter(Boolean).join(" ");

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrowClasses = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-gray-800",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-gray-800",
    left: "left-full top-1/2 -translate-y-1/2 border-l-gray-800",
    right: "right-full top-1/2 -translate-y-1/2 border-r-gray-800",
  };

  return (
    <div className="relative inline-flex group">
      {children}

      {!disabled && (
        <div
          className={`absolute z-50 pointer-events-none opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
          transition-all duration-200 ease-out ${positionClasses[position]} ${finalBoxClasses}`}
          role="tooltip"
          aria-hidden={disabled}
        >
          <div className={`relative bg-gray-800 text-white rounded-md shadow-lg whitespace-nowrap ${contentClassName || "text-sm px-3 py-2"}`}>
            {content}
            <span
              className={`absolute w-0 h-0 border-4 border-transparent ${arrowClasses[position]} ${finalArrowClasses}`}
            />
          </div>
        </div>
      )}
    </div>
  );
}
