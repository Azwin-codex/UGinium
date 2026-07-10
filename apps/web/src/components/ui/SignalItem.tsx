import {
  IconGuild,
  IconMission,
  IconSignal,
  IconTrophy,
  IconUsers,
} from "@/components/ui/icons";
import type { Signal, SignalKind } from "@/types";

const kindIcon: Record<SignalKind, React.ComponentType<{ size?: number }>> = {
  guild_invite: IconGuild,
  mission_update: IconMission,
  achievement: IconTrophy,
  connection: IconUsers,
  announcement: IconSignal,
};

export function SignalItem({ signal }: { signal: Signal }) {
  const Icon = kindIcon[signal.kind];

  return (
    <div className="flex gap-4 rounded-lg border border-border-default bg-surface-900 p-4 transition-colors duration-[160ms] hover:border-border-active">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border-default bg-surface-800 text-text-secondary">
        <Icon size={18} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <p className="font-medium text-text-primary">{signal.title}</p>
          <span className="shrink-0 text-xs text-text-muted">
            {signal.time}
          </span>
        </div>
        <p className="mt-1 text-sm text-text-secondary">{signal.body}</p>
      </div>

      {signal.unread ? (
        <span
          className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-campus-primary"
          aria-label="Unread"
        />
      ) : null}
    </div>
  );
}
