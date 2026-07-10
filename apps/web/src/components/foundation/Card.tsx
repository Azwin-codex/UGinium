import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  children: ReactNode;
}

export function Card({
  interactive = false,
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={[
        "rounded-lg bg-surface-900 border border-border-default",
        interactive
          ? "transition-colors duration-[160ms] hover:border-border-active hover:bg-surface-800"
          : "",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
