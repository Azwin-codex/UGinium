import { Button } from "@/components/foundation/Button";
import { CenteredLayout } from "@/components/layouts/CenteredLayout";
import { AcademyWordmark } from "@/components/ui/AcademyWordmark";
import { DormantOrb } from "@/components/ui/DormantOrb";
import { IconArrowRight } from "@/components/ui/icons";

export default function AcademyEntryPage() {
  return (
    <CenteredLayout>
      {/* Ambient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 38%, color-mix(in srgb, var(--campus-primary) 7%, transparent), transparent)",
        }}
      />

      <div className="animate-ug-fade-up relative flex flex-col items-center text-center">
        <DormantOrb size={200} />

        <div className="mt-10 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-text-muted">
            The University Operating System
          </p>

          <AcademyWordmark />

          <p className="mx-auto max-w-md text-balance text-text-secondary">
            Discover talent. Build Guilds. Complete Missions. Turn your
            university years into a professional legacy.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Button href="/academy" size="lg">
            Enter the Academy
            <IconArrowRight size={18} />
          </Button>
          <Button href="/discover" variant="secondary" size="lg">
            Explore first
          </Button>
        </div>

        <p className="mt-12 text-xs text-text-muted">
          Built for students. Powered by collaboration.
        </p>
      </div>
    </CenteredLayout>
  );
}
