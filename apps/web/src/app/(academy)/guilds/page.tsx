import type { Metadata } from "next";

import { Button } from "@/components/foundation/Button";
import { GuildCard } from "@/components/ui/GuildCard";
import { IconPlus } from "@/components/ui/icons";
import { guilds } from "@/data/mock";

export const metadata: Metadata = {
  title: "Guilds",
};

export default function GuildsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-text-primary">Guilds</h1>
          <p className="text-sm text-text-secondary">
            Long-term communities where students build together.
          </p>
        </div>
        <Button size="md">
          <IconPlus size={16} />
          Create Guild
        </Button>
      </header>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {guilds.map((guild) => (
          <GuildCard key={guild.id} guild={guild} />
        ))}
      </div>
    </div>
  );
}
