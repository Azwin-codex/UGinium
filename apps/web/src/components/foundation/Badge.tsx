import type { ReactNode } from "react";

type BadgeTone = "neutral" | "campus" | "success" | "warning";

interface BadgeProps {
  tone?: BadgeTone;
  children: ReactNode;
}

const tones: Record<BadgeTone, string> = {
  neutral:
    "bg-surface-800 text-text-secondary border border-border-default",
  campus:
    "bg-[color-mix(in_srgb,var(--campus-primary)_16%,transparent)] " +
    "text-[color-mix(in_srgb,var(--campus-primary)_80%,white)] " +
    "border border-[color-mix(in_srgb,var(--campus-primary)_35%,transparent)]",
  success:
    "bg-[rgba(74,222,128,0.1)] text-[rgba(134,239,172,0.9)] border border-[rgba(74,222,128,0.25)]",
  warning:
    "bg-[rgba(250,204,21,0.08)] text-[rgba(253,224,71,0.85)] border border-[rgba(250,204,21,0.2)]",
};

export function Badge({ tone = "neutral", children }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap",
        tones[tone],
      ].join(" ")}
    >
      {children}
    </span>
  );
}
