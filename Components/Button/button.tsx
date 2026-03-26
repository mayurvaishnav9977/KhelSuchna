"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "secondary" | "error"; // match MUI naming
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "contained",
  color = "primary",
  size = "medium",
  fullWidth = false,
  className,
  onClick,
  disabled,
  ...props
}) => {
  const baseStyle =
    "rounded font-semibold transition duration-200 focus:outline-none inline-flex items-center justify-center";

  // Tailwind styles for variant + color combos
  const styles: Record<string, Record<string, string>> = {
    contained: {
      primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300",
      secondary: "bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-300",
      error: "bg-red-600 text-white hover:bg-red-700 disabled:bg-red-300",
    },
    outlined: {
      primary:
        "border border-blue-600 text-blue-600 hover:bg-blue-50 disabled:text-blue-300 disabled:border-blue-300",
      secondary:
        "border border-gray-600 text-gray-600 hover:bg-gray-50 disabled:text-gray-300 disabled:border-gray-300",
      error:
        "border border-red-600 text-red-600 hover:bg-red-50 disabled:text-red-300 disabled:border-red-300",
    },
    text: {
      primary: "text-blue-600 hover:underline disabled:text-blue-300",
      secondary: "text-gray-600 hover:underline disabled:text-gray-300",
      error: "text-red-600 hover:underline disabled:text-red-300",
    },
  };

  // Size mapping
  const sizes: Record<string, string> = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      type="button"
      {...props}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyle} 
        ${styles[variant][color]} 
        ${sizes[size]} 
        ${fullWidth ? "w-full" : ""} 
        ${className ?? ""}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
