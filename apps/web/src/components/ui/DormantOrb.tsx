interface DormantOrbProps {
  size?: number;
}

/**
 * The Academy Orb in its dormant state — a calm, breathing presence
 * on the entry screen. Pure CSS animation per the frozen architecture.
 */
export function DormantOrb({ size = 220 }: DormantOrbProps) {
  return (
    <div
      aria-hidden
      className="relative animate-ug-breathe"
      style={{ width: size, height: size }}
    >
      {/* Outer halo */}
      <div
        className="absolute inset-0 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--campus-primary) 28%, transparent) 0%, transparent 68%)",
        }}
      />
      {/* Core sphere */}
      <div
        className="absolute rounded-full border border-border-active"
        style={{
          inset: size * 0.22,
          background:
            "radial-gradient(circle at 35% 30%, var(--surface-700), var(--surface-950) 75%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.08), 0 0 60px color-mix(in srgb, var(--campus-primary) 18%, transparent)",
        }}
      />
      {/* Equator ring */}
      <div
        className="absolute rounded-full border border-border-default"
        style={{ inset: size * 0.1, transform: "rotateX(70deg)" }}
      />
    </div>
  );
}
