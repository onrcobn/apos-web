import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, hoverEffect = true, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`glass-panel rounded-xl p-6 transition-all duration-300 ${
          hoverEffect ? "glass-panel-hover" : ""
        } ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
