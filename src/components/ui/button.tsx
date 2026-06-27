"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    const baseStyle =
      "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide";

    const variantStyles = {
      primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/10",
      secondary:
        "bg-gray-900 hover:bg-gray-800 text-gray-100 border border-gray-800 hover:border-gray-700",
      outline:
        "border border-gray-800 hover:border-gray-700 bg-transparent hover:bg-gray-900 text-gray-300 hover:text-white",
      ghost: "hover:bg-gray-900 text-gray-400 hover:text-gray-200",
    };

    const sizeStyles = {
      sm: "px-3.5 py-1.5 text-xs",
      md: "px-5 py-2.5 text-sm",
      lg: "px-7 py-3 text-base",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
