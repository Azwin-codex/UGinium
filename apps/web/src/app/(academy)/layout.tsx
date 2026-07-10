import type { ReactNode } from "react";

import { AcademyShell } from "@/components/layouts/AcademyShell";

export default function AcademyLayout({ children }: { children: ReactNode }) {
  return <AcademyShell>{children}</AcademyShell>;
}
