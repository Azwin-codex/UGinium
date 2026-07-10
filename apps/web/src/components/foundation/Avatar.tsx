type AvatarSize = "sm" | "md" | "lg" | "xl";

interface AvatarProps {
  initials: string;
  size?: AvatarSize;
}

const sizes: Record<AvatarSize, string> = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-14 w-14 text-base",
  xl: "h-20 w-20 text-xl",
};

export function Avatar({ initials, size = "md" }: AvatarProps) {
  return (
    <div
      aria-hidden
      className={[
        "flex items-center justify-center rounded-full font-semibold tracking-wide",
        "bg-surface-700 text-text-primary border border-border-active",
        sizes[size],
      ].join(" ")}
    >
      {initials}
    </div>
  );
}
