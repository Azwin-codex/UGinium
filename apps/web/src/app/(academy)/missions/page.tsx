import type { Metadata } from "next";

import { Button } from "@/components/foundation/Button";
import { IconPlus } from "@/components/ui/icons";
import { MissionCard } from "@/components/ui/MissionCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { missions } from "@/data/mock";

export const metadata: Metadata = {
  title: "Missions",
};

export default function MissionsPage() {
  const recruiting = missions.filter((m) => m.status === "recruiting");
  const active = missions.filter((m) => m.status === "active");
  const completed = missions.filter((m) => m.status === "completed");

  return (
    <div className="mx-auto max-w-6xl space-y-10">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-text-primary">
            Missions
          </h1>
          <p className="text-sm text-text-secondary">
            Real projects with real objectives. Join one or start your own.
          </p>
        </div>
        <Button size="md">
          <IconPlus size={16} />
          Create Mission
        </Button>
      </header>

      <section className="space-y-4">
        <SectionHeader
          title="Recruiting"
          description="Open roles waiting for contributors."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {recruiting.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader title="Active" description="Currently in progress." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {active.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader
          title="Completed"
          description="Shipped and archived to portfolios."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {completed.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </section>
    </div>
  );
}
