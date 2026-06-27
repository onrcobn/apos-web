import * as React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "success" | "warning" | "critical" | "info" | "neutral";
  children: React.ReactNode;
}

export const Badge = ({ variant = "neutral", children, className = "", ...props }: BadgeProps) => {
  const baseStyle =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border transition-all duration-200";

  const variantStyles = {
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    warning: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    critical: "bg-red-500/10 text-red-400 border-red-500/20",
    info: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    neutral: "bg-gray-900 text-gray-400 border-gray-800",
  };

  return (
    <span className={`${baseStyle} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};

export default Badge;
