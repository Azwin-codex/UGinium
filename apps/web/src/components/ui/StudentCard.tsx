import { Avatar } from "@/components/foundation/Avatar";
import { Badge } from "@/components/foundation/Badge";
import { Card } from "@/components/foundation/Card";
import type { Student } from "@/types";

export function StudentCard({ student }: { student: Student }) {
  return (
    <Card interactive className="flex h-full flex-col gap-4 p-5">
      <div className="flex items-center gap-3">
        <Avatar initials={student.initials} size="lg" />
        <div>
          <h3 className="font-semibold text-text-primary">{student.name}</h3>
          <p className="text-xs text-text-muted">
            {student.department} · Year {student.year}
          </p>
        </div>
        <span className="ml-auto rounded-md border border-border-default bg-surface-800 px-2 py-1 font-numeric text-xs text-text-secondary">
          LV {student.level}
        </span>
      </div>

      <p className="line-clamp-2 text-sm text-text-secondary">
        {student.headline}
      </p>

      <div className="mt-auto flex flex-wrap gap-1.5">
        {student.skills.slice(0, 3).map((skill) => (
          <Badge key={skill.name}>{skill.name}</Badge>
        ))}
      </div>
    </Card>
  );
}
