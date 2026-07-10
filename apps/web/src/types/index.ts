export type MissionStatus = "recruiting" | "active" | "completed";

export type SignalKind =
  | "guild_invite"
  | "mission_update"
  | "achievement"
  | "connection"
  | "announcement";

export interface Skill {
  name: string;
  level: "learning" | "proficient" | "expert";
}

export interface Student {
  id: string;
  name: string;
  handle: string;
  department: string;
  year: number;
  level: number;
  xp: number;
  xpToNextLevel: number;
  headline: string;
  skills: Skill[];
  guildIds: string[];
  initials: string;
}

export interface Guild {
  id: string;
  name: string;
  tagline: string;
  focus: string;
  memberCount: number;
  activeMissions: number;
  reputation: number;
  skills: string[];
  leaderId: string;
}

export interface Mission {
  id: string;
  title: string;
  guildId: string | null;
  summary: string;
  status: MissionStatus;
  progress: number;
  requiredSkills: string[];
  memberIds: string[];
  openRoles: number;
  deadline: string;
  xpReward: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  year: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  earnedAt: string;
}

export interface Signal {
  id: string;
  kind: SignalKind;
  title: string;
  body: string;
  time: string;
  unread: boolean;
}
