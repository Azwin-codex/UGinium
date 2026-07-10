import type { Metadata } from "next";

import { SignalItem } from "@/components/ui/SignalItem";
import { signals } from "@/data/mock";

export const metadata: Metadata = {
  title: "Signals",
};

export default function SignalsPage() {
  const unread = signals.filter((s) => s.unread);
  const read = signals.filter((s) => !s.unread);

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold text-text-primary">Signals</h1>
        <p className="text-sm text-text-secondary">
          Everything that needs your attention, without the noise.
        </p>
      </header>

      {unread.length > 0 ? (
        <section className="space-y-3">
          <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-text-muted">
            New
          </h2>
          {unread.map((signal) => (
            <SignalItem key={signal.id} signal={signal} />
          ))}
        </section>
      ) : null}

      <section className="space-y-3">
        <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-text-muted">
          Earlier
        </h2>
        {read.map((signal) => (
          <SignalItem key={signal.id} signal={signal} />
        ))}
      </section>
    </div>
  );
}
