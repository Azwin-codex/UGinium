"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { Avatar } from "@/components/foundation/Avatar";
import { AcademyWordmark } from "@/components/ui/AcademyWordmark";
import {
  IconCore,
  IconDiscover,
  IconGuild,
  IconMission,
  IconProfile,
  IconSearch,
  IconSignal,
} from "@/components/ui/icons";
import { currentStudent, signals } from "@/data/mock";

const navItems = [
  { href: "/academy", label: "Academy Core", icon: IconCore },
  { href: "/discover", label: "Discover", icon: IconDiscover },
  { href: "/guilds", label: "Guilds", icon: IconGuild },
  { href: "/missions", label: "Missions", icon: IconMission },
  { href: "/profile", label: "Profile", icon: IconProfile },
  { href: "/signals", label: "Signals", icon: IconSignal },
];

export function AcademyShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const unreadCount = signals.filter((s) => s.unread).length;

  return (
    <div className="flex min-h-dvh bg-surface-950">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-60 flex-col border-r border-border-default bg-surface-950 md:flex">
        <div className="flex h-16 items-center border-b border-border-default px-5">
          <Link href="/academy" aria-label="Academy Core">
            <AcademyWordmark size="sm" />
          </Link>
        </div>

        <nav className="flex-1 space-y-1 p-3" aria-label="Academy navigation">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active =
              pathname === href || pathname.startsWith(`${href}/`);

            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={[
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium",
                  "transition-colors duration-[160ms]",
                  active
                    ? "bg-surface-800 text-text-primary"
                    : "text-text-secondary hover:bg-surface-900 hover:text-text-primary",
                ].join(" ")}
              >
                <Icon size={18} />
                {label}
                {href === "/signals" && unreadCount > 0 ? (
                  <span className="ml-auto rounded-full bg-campus-primary px-1.5 py-0.5 font-numeric text-[10px] font-semibold text-white">
                    {unreadCount}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-border-default p-3">
          <Link
            href="/profile"
            className="flex items-center gap-3 rounded-md px-2 py-2 transition-colors duration-[160ms] hover:bg-surface-900"
          >
            <Avatar initials={currentStudent.initials} size="sm" />
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-text-primary">
                {currentStudent.name}
              </p>
              <p className="font-numeric text-xs text-text-muted">
                Level {currentStudent.level}
              </p>
            </div>
          </Link>
        </div>
      </aside>

      {/* Workspace */}
      <div className="flex min-w-0 flex-1 flex-col md:pl-60">
        {/* Top bar */}
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-border-default bg-surface-950/90 px-5 backdrop-blur-sm md:px-8">
          <Link href="/academy" className="md:hidden" aria-label="Academy Core">
            <AcademyWordmark size="sm" />
          </Link>

          <div className="relative ml-auto w-full max-w-xs md:max-w-sm">
            <IconSearch
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
            />
            <input
              type="search"
              placeholder="Search students, guilds, missions…"
              aria-label="Search"
              className="h-9 w-full rounded-md border border-border-default bg-surface-900 pl-9 pr-3 text-sm text-text-primary placeholder:text-text-muted focus:border-border-active"
            />
          </div>

          <Link
            href="/signals"
            aria-label={`Signals, ${unreadCount} unread`}
            className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border-default bg-surface-900 text-text-secondary transition-colors duration-[160ms] hover:border-border-active hover:text-text-primary"
          >
            <IconSignal size={17} />
            {unreadCount > 0 ? (
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-campus-primary" />
            ) : null}
          </Link>
        </header>

        <main className="flex-1 px-5 py-8 md:px-8">{children}</main>

        {/* Mobile bottom navigation */}
        <nav
          className="sticky bottom-0 z-10 flex border-t border-border-default bg-surface-950/95 backdrop-blur-sm md:hidden"
          aria-label="Academy navigation"
        >
          {navItems.slice(0, 5).map(({ href, label, icon: Icon }) => {
            const active =
              pathname === href || pathname.startsWith(`${href}/`);

            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                aria-label={label}
                className={[
                  "flex flex-1 flex-col items-center gap-1 py-3 text-[10px] font-medium",
                  active ? "text-text-primary" : "text-text-muted",
                ].join(" ")}
              >
                <Icon size={20} />
                {label.split(" ")[0]}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
