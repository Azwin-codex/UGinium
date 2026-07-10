import type { Metadata } from "next";

import { Avatar } from "@/components/foundation/Avatar";
import { Badge } from "@/components/foundation/Badge";
import { Button } from "@/components/foundation/Button";
import { Card } from "@/components/foundation/Card";
import { GuildCard } from "@/components/ui/GuildCard";
import { IconTrophy } from "@/components/ui/icons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { XPBar } from "@/components/ui/XPBar";
import { achievements, currentStudent, guilds, projects } from "@/data/mock";

export const metadata: Metadata = {
  title: "Profile",
};

const skillTone: Record<string, "campus" | "neutral"> = {
  expert: "campus",
  proficient: "neutral",
  learning: "neutral",
};

export default function ProfilePage() {
  const myGuilds = guilds.filter((g) =>
    currentStudent.guildIds.includes(g.id),
  );

  return (
    <div className="mx-auto max-w-6xl space-y-10">
      {/* Identity */}
      <Card className="p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <Avatar initials={currentStudent.initials} size="xl" />
            <div>
              <h1 className="text-2xl font-semibold text-text-primary">
                {currentStudent.name}
              </h1>
              <p className="text-sm text-text-secondary">
                @{currentStudent.handle} · {currentStudent.department} · Year{" "}
                {currentStudent.year}
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                {currentStudent.headline}
              </p>
            </div>
          </div>
          <Button variant="secondary" size="md">
            Edit Profile
          </Button>
        </div>

        <div className="mt-6 md:max-w-md">
          <XPBar student={currentStudent} />
        </div>
      </Card>

      {/* Skills */}
      <section className="space-y-4">
        <SectionHeader
          title="Skills"
          description="Verified through completed missions."
        />
        <div className="flex flex-wrap gap-2">
          {currentStudent.skills.map((skill) => (
            <span key={skill.name} className="inline-flex items-center gap-2">
              <Badge tone={skillTone[skill.level]}>
                {skill.name}
                <span className="ml-1.5 opacity-60">· {skill.level}</span>
              </Badge>
            </span>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="space-y-4">
        <SectionHeader
          title="Portfolio"
          description="A permanent record of shipped work."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="flex h-full flex-col gap-3 p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-text-primary">
                  {project.title}
                </h3>
                <span className="font-numeric text-xs text-text-muted">
                  {project.year}
                </span>
              </div>
              <p className="text-sm text-text-secondary">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="space-y-4">
        <SectionHeader
          title="Achievements"
          description="Recognition earned through real contribution."
        />
        <div className="grid gap-3 md:grid-cols-3">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className="flex gap-4 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border-default bg-surface-800 text-text-secondary">
                <IconTrophy size={18} />
              </div>
              <div>
                <p className="font-medium text-text-primary">
                  {achievement.title}
                </p>
                <p className="mt-0.5 text-xs text-text-secondary">
                  {achievement.description}
                </p>
                <p className="mt-1 text-xs text-text-muted">
                  {achievement.earnedAt}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Guilds */}
      <section className="space-y-4">
        <SectionHeader title="Guilds" description="Communities you build with." />
        <div className="grid gap-4 md:grid-cols-2">
          {myGuilds.map((guild) => (
            <GuildCard key={guild.id} guild={guild} />
          ))}
        </div>
      </section>
    </div>
  );
}
