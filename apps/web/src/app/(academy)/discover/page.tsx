import type { Metadata } from "next";

import { GuildCard } from "@/components/ui/GuildCard";
import { MissionCard } from "@/components/ui/MissionCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StudentCard } from "@/components/ui/StudentCard";
import { currentStudent, guilds, missions, students } from "@/data/mock";

export const metadata: Metadata = {
  title: "Discover",
};

export default function DiscoverPage() {
  const otherStudents = students.filter((s) => s.id !== currentStudent.id);
  const recruitingMissions = missions.filter(
    (m) => m.status === "recruiting",
  );

  return (
    <div className="mx-auto max-w-6xl space-y-10">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold text-text-primary">Discover</h1>
        <p className="text-sm text-text-secondary">
          Find the people, guilds, and missions that match your ambition.
        </p>
      </header>

      <section className="space-y-4">
        <SectionHeader
          title="Students"
          description="Peers across your campus, ranked by shared skills."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {otherStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader
          title="Missions recruiting now"
          description="Teams actively looking for contributors."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {recruitingMissions.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader
          title="Guilds"
          description="Communities built around a craft."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {guilds.map((guild) => (
            <GuildCard key={guild.id} guild={guild} />
          ))}
        </div>
      </section>
    </div>
  );
}
