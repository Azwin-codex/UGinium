import type { Metadata } from "next";

import { Avatar } from "@/components/foundation/Avatar";
import { Button } from "@/components/foundation/Button";
import { Card } from "@/components/foundation/Card";
import { GuildCard } from "@/components/ui/GuildCard";
import { MissionCard } from "@/components/ui/MissionCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SignalItem } from "@/components/ui/SignalItem";
import { StatTile } from "@/components/ui/StatTile";
import { XPBar } from "@/components/ui/XPBar";
import { currentStudent, guilds, missions, signals } from "@/data/mock";

export const metadata: Metadata = {
  title: "Academy Core",
};

export default function AcademyCorePage() {
  const myGuilds = guilds.filter((g) =>
    currentStudent.guildIds.includes(g.id),
  );
  const activeMissions = missions.filter((m) => m.status === "active");
  const latestSignals = signals.slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl space-y-10">
      {/* Identity + progression */}
      <Card className="p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <Avatar initials={currentStudent.initials} size="xl" />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                Welcome back
              </p>
              <h1 className="mt-1 text-2xl font-semibold text-text-primary">
                {currentStudent.name}
              </h1>
              <p className="text-sm text-text-secondary">
                {currentStudent.headline}
              </p>
            </div>
          </div>

          <div className="flex-1 md:max-w-sm md:pl-8">
            <XPBar student={currentStudent} />
          </div>
        </div>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatTile
          label="Level"
          value={String(currentStudent.level)}
          hint="Academy standing"
        />
        <StatTile
          label="Active Missions"
          value={String(activeMissions.length)}
          hint="Across your guilds"
        />
        <StatTile
          label="Guilds"
          value={String(myGuilds.length)}
          hint="Member and leader"
        />
        <StatTile
          label="Total XP"
          value={currentStudent.xp.toLocaleString()}
          hint="Earned through contribution"
        />
      </div>

      {/* Current missions */}
      <section className="space-y-4">
        <SectionHeader
          title="Current Missions"
          description="Where your contribution is needed next."
          action={
            <Button href="/missions" variant="ghost" size="sm">
              View all
            </Button>
          }
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {activeMissions.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </section>

      {/* Guild activity */}
      <section className="space-y-4">
        <SectionHeader
          title="Your Guilds"
          description="Long-term teams you build with."
          action={
            <Button href="/guilds" variant="ghost" size="sm">
              Browse guilds
            </Button>
          }
        />
        <div className="grid gap-4 md:grid-cols-2">
          {myGuilds.map((guild) => (
            <GuildCard key={guild.id} guild={guild} />
          ))}
        </div>
      </section>

      {/* Signals */}
      <section className="space-y-4">
        <SectionHeader
          title="Latest Signals"
          description="What changed while you were away."
          action={
            <Button href="/signals" variant="ghost" size="sm">
              All signals
            </Button>
          }
        />
        <div className="space-y-3">
          {latestSignals.map((signal) => (
            <SignalItem key={signal.id} signal={signal} />
          ))}
        </div>
      </section>
    </div>
  );
}
