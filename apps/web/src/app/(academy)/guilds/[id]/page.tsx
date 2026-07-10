import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Avatar } from "@/components/foundation/Avatar";
import { Badge } from "@/components/foundation/Badge";
import { Button } from "@/components/foundation/Button";
import { Card } from "@/components/foundation/Card";
import { IconGuild } from "@/components/ui/icons";
import { MissionCard } from "@/components/ui/MissionCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatTile } from "@/components/ui/StatTile";
import { getGuild, getStudent, missions, students } from "@/data/mock";

interface GuildDetailProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: GuildDetailProps): Promise<Metadata> {
  const { id } = await params;
  const guild = getGuild(id);
  return { title: guild?.name ?? "Guild" };
}

export default async function GuildDetailPage({ params }: GuildDetailProps) {
  const { id } = await params;
  const guild = getGuild(id);

  if (!guild) notFound();

  const leader = getStudent(guild.leaderId);
  const guildMissions = missions.filter((m) => m.guildId === guild.id);
  const members = students.filter((s) => s.guildIds.includes(guild.id));

  return (
    <div className="mx-auto max-w-6xl space-y-10">
      {/* Guild header */}
      <Card className="p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-border-default bg-surface-800 text-text-secondary">
              <IconGuild size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-text-primary">
                {guild.name}
              </h1>
              <p className="text-sm text-text-secondary">{guild.tagline}</p>
              {leader ? (
                <p className="mt-1 text-xs text-text-muted">
                  Led by {leader.name}
                </p>
              ) : null}
            </div>
          </div>
          <Button size="md">Request to join</Button>
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {guild.skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </Card>

      {/* Guild stats */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatTile label="Members" value={String(guild.memberCount)} />
        <StatTile
          label="Active Missions"
          value={String(guild.activeMissions)}
        />
        <StatTile label="Reputation" value={String(guild.reputation)} />
        <StatTile label="Focus" value={guild.focus} />
      </div>

      {/* Missions */}
      <section className="space-y-4">
        <SectionHeader
          title="Guild Missions"
          description="What this guild is building."
        />
        {guildMissions.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {guildMissions.map((mission) => (
              <MissionCard key={mission.id} mission={mission} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-text-muted">No missions yet.</p>
        )}
      </section>

      {/* Members */}
      <section className="space-y-4">
        <SectionHeader
          title="Members on campus"
          description="Guild members with public profiles."
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
              {member.id === guild.leaderId ? (
                <span className="ml-auto">
                  <Badge tone="campus">Leader</Badge>
                </span>
              ) : null}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
