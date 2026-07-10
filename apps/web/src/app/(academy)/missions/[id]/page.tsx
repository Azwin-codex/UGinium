import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Avatar } from "@/components/foundation/Avatar";
import { Badge } from "@/components/foundation/Badge";
import { Button } from "@/components/foundation/Button";
import { Card } from "@/components/foundation/Card";
import { ProgressBar } from "@/components/foundation/ProgressBar";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatTile } from "@/components/ui/StatTile";
import { getGuild, getMission, getStudent } from "@/data/mock";
import type { MissionStatus } from "@/types";

interface MissionDetailProps {
  params: Promise<{ id: string }>;
}

const statusLabel: Record<
  MissionStatus,
  { tone: "campus" | "success" | "warning"; label: string }
> = {
  recruiting: { tone: "warning", label: "Recruiting" },
  active: { tone: "campus", label: "Active" },
  completed: { tone: "success", label: "Completed" },
};

export async function generateMetadata({
  params,
}: MissionDetailProps): Promise<Metadata> {
  const { id } = await params;
  const mission = getMission(id);
  return { title: mission?.title ?? "Mission" };
}

export default async function MissionDetailPage({
  params,
}: MissionDetailProps) {
  const { id } = await params;
  const mission = getMission(id);

  if (!mission) notFound();

  const guild = mission.guildId ? getGuild(mission.guildId) : undefined;
  const members = mission.memberIds
    .map(getStudent)
    .filter((s) => s !== undefined);
  const status = statusLabel[mission.status];

  return (
    <div className="mx-auto max-w-6xl space-y-10">
      {/* Mission header */}
      <Card className="space-y-6 p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold text-text-primary">
                {mission.title}
              </h1>
              <Badge tone={status.tone}>{status.label}</Badge>
            </div>
            {guild ? (
              <Link
                href={`/guilds/${guild.id}`}
                className="text-sm text-text-muted transition-colors duration-[160ms] hover:text-text-secondary"
              >
                {guild.name}
              </Link>
            ) : null}
          </div>

          {mission.status !== "completed" ? (
            <Button size="md">Join Mission</Button>
          ) : null}
        </div>

        <p className="max-w-2xl text-text-secondary">{mission.summary}</p>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs text-text-muted">
            <span>Progress</span>
            <span className="font-numeric">{mission.progress}%</span>
          </div>
          <ProgressBar
            value={mission.progress}
            label={`${mission.title} progress`}
          />
        </div>
      </Card>

      {/* Mission stats */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatTile label="Deadline" value={mission.deadline} />
        <StatTile
          label="Open Roles"
          value={String(mission.openRoles)}
          hint="Contributors needed"
        />
        <StatTile
          label="Team Size"
          value={String(mission.memberIds.length)}
        />
        <StatTile
          label="XP Reward"
          value={`+${mission.xpReward}`}
          hint="On completion"
        />
      </div>

      {/* Required skills */}
      <section className="space-y-4">
        <SectionHeader
          title="Required Skills"
          description="What this mission needs from contributors."
        />
        <div className="flex flex-wrap gap-2">
          {mission.requiredSkills.map((skill) => (
            <Badge key={skill} tone="campus">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="space-y-4">
        <SectionHeader
          title="Contributors"
          description="The team behind this mission."
        />
        <div className="grid gap-3 md:grid-cols-2">
          {members.map((member) => (
            <Card key={member.id} className="flex items-center gap-3 p-4">
              <Avatar initials={member.initials} size="md" />
              <div className="min-w-0">
                <p className="truncate font-medium text-text-primary">
                  {member.name}
                </p>
                <p className="text-xs text-text-muted">
                  {member.department} · Level {member.level}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
