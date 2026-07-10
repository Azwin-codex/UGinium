export default function HomePage() {
  return (
    <main className="min-h-dvh bg-surface-950 text-text-primary flex items-center justify-center px-8">
      <div className="max-w-3xl w-full space-y-8">
        {/* Title */}
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-text-muted">
            UGinium Foundation Test
          </p>

          <h1
            className="font-display text-6xl tracking-[0.14em]"
            style={{ fontWeight: 700 }}
          >
            UGINIUM
          </h1>

          <p className="text-text-secondary text-lg">
            Design system verification page.
          </p>
        </div>

        {/* Token Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="h-24 rounded-lg bg-surface-900 border border-border-default flex items-center justify-center">
            Surface 900
          </div>

          <div className="h-24 rounded-lg bg-surface-800 border border-border-default flex items-center justify-center">
            Surface 800
          </div>

          <div className="h-24 rounded-lg border border-border-default flex items-center justify-center">
            Border
          </div>

          <div
            className="h-24 rounded-lg flex items-center justify-center text-white"
            style={{ background: "var(--campus-primary)" }}
          >
            Campus
          </div>
        </div>

        {/* Typography */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">
            Typography Hierarchy
          </h2>

          <p className="text-text-primary">
            Primary text
          </p>

          <p className="text-text-secondary">
            Secondary text
          </p>

          <p className="text-text-muted">
            Muted text
          </p>
        </div>

        {/* Motion Test */}
        <div className="flex gap-8 items-center">
          <div
            className="w-24 h-24 rounded-full animate-ug-breathe"
            style={{
              background:
                "radial-gradient(circle, var(--campus-primary), transparent 70%)",
            }}
          />

          <div className="animate-ug-fade-up">
            <p className="text-text-secondary">
              If this text fades upward on load and the orb gently breathes,
              your global animations are working.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}