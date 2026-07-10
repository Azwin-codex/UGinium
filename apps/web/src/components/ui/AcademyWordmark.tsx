interface AcademyWordmarkProps {
  size?: "sm" | "lg";
}

export function AcademyWordmark({ size = "lg" }: AcademyWordmarkProps) {
  if (size === "sm") {
    return (
      <span className="font-display text-lg font-bold tracking-[0.18em] text-text-primary">
        UGINIUM
      </span>
    );
  }

  return (
    <h1 className="font-display text-5xl font-bold tracking-[0.18em] text-text-primary md:text-7xl">
      UGINIUM
    </h1>
  );
}
