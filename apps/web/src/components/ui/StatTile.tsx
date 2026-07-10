import { Card } from "@/components/foundation/Card";

interface StatTileProps {
  label: string;
  value: string;
  hint?: string;
}

export function StatTile({ label, value, hint }: StatTileProps) {
  return (
    <Card className="p-5">
      <p className="text-xs uppercase tracking-[0.14em] text-text-muted">
        {label}
      </p>
      <p className="mt-2 font-numeric text-2xl font-semibold text-text-primary">
        {value}
      </p>
      {hint ? <p className="mt-1 text-xs text-text-muted">{hint}</p> : null}
    </Card>
  );
}
