import Link from "next/link";

import { Badge } from "@/components/foundation/Badge";
import { Card } from "@/components/foundation/Card";
import { IconGuild, IconUsers } from "@/components/ui/icons";
import type { Guild } from "@/types";

export function GuildCard({ guild }: { guild: Guild }) {
  return (
    <Link href={`/guilds/${guild.id}`} className="block">
      <Card interactive className="flex h-full flex-col gap-4 p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border-default bg-surface-800 text-text-secondary">
            <IconGuild size={22} />
          </div>
          <div>
            <h3 className="font-semibold text-text-primary">{guild.name}</h3>
            <p className="text-xs text-text-muted">{guild.focus}</p>
          </div>
        </div>

        <p className="text-sm text-text-secondary">{guild.tagline}</p>

        <div className="mt-auto space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {guild.skills.slice(0, 4).map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs text-text-muted">
            <span className="inline-flex items-center gap-1.5">
              <IconUsers size={14} />
              {guild.memberCount} members
            </span>
            <span className="font-numeric">
              {guild.activeMissions} active missions
            </span>
            <span className="ml-auto font-numeric text-text-secondary">
              REP {guild.reputation}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
