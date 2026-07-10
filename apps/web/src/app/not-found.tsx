import { Button } from "@/components/foundation/Button";
import { CenteredLayout } from "@/components/layouts/CenteredLayout";

export default function NotFound() {
  return (
    <CenteredLayout>
      <div className="animate-ug-fade-up space-y-6 text-center">
        <p className="font-numeric text-7xl font-semibold text-text-muted">
          404
        </p>
        <div className="space-y-2">
          <h1 className="text-xl font-semibold text-text-primary">
            This room doesn&apos;t exist
          </h1>
          <p className="text-sm text-text-secondary">
            The page you&apos;re looking for isn&apos;t part of the Academy.
          </p>
        </div>
        <Button href="/academy">Return to Academy Core</Button>
      </div>
    </CenteredLayout>
  );
}
