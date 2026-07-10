import { ProgressBar } from "@/components/foundation/ProgressBar";
import type { Student } from "@/types";

export function XPBar({ student }: { student: Student }) {
  const percent = Math.round((student.xp / student.xpToNextLevel) * 100);

  return (
    <div className="space-y-1.5">
      <div className="flex items-baseline justify-between text-xs">
        <span className="font-medium uppercase tracking-[0.14em] text-text-muted">
          Level {student.level}
        </span>
        <span className="font-numeric text-text-secondary">
          {student.xp.toLocaleString()} / {student.xpToNextLevel.toLocaleString()} XP
        </span>
      </div>
      <ProgressBar value={percent} label={`Level ${student.level} progress`} />
    </div>
  );
}
