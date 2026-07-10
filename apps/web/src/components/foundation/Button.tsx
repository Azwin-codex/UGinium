import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium " +
  "transition-colors duration-[160ms] select-none " +
  "disabled:opacity-40 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-campus-primary text-white hover:brightness-110 active:brightness-95",
  secondary:
    "bg-surface-800 text-text-primary border border-border-default " +
    "hover:border-border-active hover:bg-surface-700",
  ghost:
    "text-text-secondary hover:text-text-primary hover:bg-surface-800",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = [base, variants[variant], sizes[size], className].join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
