interface ProgressBarProps {
  value: number;
  label?: string;
}

export function ProgressBar({ value, label }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
      className="h-1.5 w-full overflow-hidden rounded-full bg-surface-700"
    >
      <div
        className="h-full rounded-full bg-campus-primary transition-[width] duration-[420ms]"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
