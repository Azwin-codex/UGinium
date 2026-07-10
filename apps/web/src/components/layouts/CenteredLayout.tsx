import type { ReactNode } from "react";

/** Full-viewport centered stage used by the Academy Entry screen. */
export function CenteredLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-surface-950 px-6">
      {children}
    </main>
  );
}
