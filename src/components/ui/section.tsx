import * as React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

export const Section = ({
  id,
  className = "",
  containerClassName = "",
  children,
  ...props
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 border-b border-gray-900/60 last:border-b-0 ${className}`}
      {...props}
    >
      <div className={`max-w-7xl mx-auto px-6 md:px-8 ${containerClassName}`}>{children}</div>
    </section>
  );
};

export default Section;
