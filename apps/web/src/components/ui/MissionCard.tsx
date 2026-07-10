import Link from "next/link";

import { Badge } from "@/components/foundation/Badge";
import { Card } from "@/components/foundation/Card";
import { ProgressBar } from "@/components/foundation/ProgressBar";
import { getGuild } from "@/data/mock";
import type { Mission, MissionStatus } from "@/types";

const statusTone: Record<
  MissionStatus,
  { tone: "campus" | "success" | "warning"; label: string }
> = {
  recruiting: { tone: "warning", label: "Recruiting" },
  active: { tone: "campus", label: "Active" },
  completed: { tone: "success", label: "Completed" },
};

export function MissionCard({ mission }: { mission: Mission }) {
  const guild = mission.guildId ? getGuild(mission.guildId) : undefined;
  const status = statusTone[mission.status];

  return (
    <Link href={`/missions/${mission.id}`} className="block">
      <Card interactive className="flex h-full flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-text-primary">
              {mission.title}
            </h3>
            {guild ? (
              <p className="mt-0.5 text-xs text-text-muted">{guild.name}</p>
            ) : null}
          </div>
          <Badge tone={status.tone}>{status.label}</Badge>
        </div>

        <p className="line-clamp-2 text-sm text-text-secondary">
          {mission.summary}
        </p>

        <div className="mt-auto space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {mission.requiredSkills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-text-muted">
              <span>{mission.deadline}</span>
              <span className="font-numeric">{mission.progress}%</span>
            </div>
            <ProgressBar
              value={mission.progress}
              label={`${mission.title} progress`}
            />
          </div>
        </div>
      </Card>
    </Link>
  );
}
