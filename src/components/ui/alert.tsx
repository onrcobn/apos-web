import * as React from "react";
import { Icons } from "./icons";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "warning" | "critical" | "info";
  title?: string;
  children: React.ReactNode;
}

export const Alert = ({ variant = "info", title, children, className = "", ...props }: AlertProps) => {
  const Icon = {
    success: Icons.Success,
    warning: Icons.Warning,
    critical: Icons.Critical,
    info: Icons.Info,
  }[variant];

  const variantStyles = {
    success: "bg-emerald-950/20 border-emerald-500/20 text-emerald-300",
    warning: "bg-orange-950/20 border-orange-500/20 text-orange-300",
    critical: "bg-red-950/20 border-red-500/20 text-red-300",
    info: "bg-blue-950/20 border-blue-500/20 text-blue-300",
  };

  const iconColors = {
    success: "text-emerald-400",
    warning: "text-orange-400",
    critical: "text-red-400",
    info: "text-blue-400",
  };

  return (
    <div
      role="alert"
      className={`flex items-start gap-3 p-4 rounded-lg border text-sm ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${iconColors[variant]}`} />
      <div className="flex flex-col gap-1">
        {title && <span className="font-semibold text-white tracking-wide">{title}</span>}
        <div className="text-secondary leading-relaxed text-xs">{children}</div>
      </div>
    </div>
  );
};

export default Alert;
