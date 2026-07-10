import type {
  Achievement,
  Guild,
  Mission,
  Project,
  Signal,
  Student,
} from "@/types";

/* Mock data for the V1 prototype. Replaced by Supabase queries later. */

export const currentStudent: Student = {
  id: "s-01",
  name: "Aswin K",
  handle: "aswin",
  department: "Computer Science",
  year: 3,
  level: 12,
  xp: 4820,
  xpToNextLevel: 6000,
  headline: "Full-stack builder. Founder of the AI Guild.",
  skills: [
    { name: "TypeScript", level: "expert" },
    { name: "React", level: "expert" },
    { name: "Python", level: "proficient" },
    { name: "System Design", level: "proficient" },
    { name: "Machine Learning", level: "learning" },
  ],
  guildIds: ["g-01", "g-03"],
  initials: "AK",
};

export const students: Student[] = [
  currentStudent,
  {
    id: "s-02",
    name: "Bijo K Varghese",
    handle: "bijo",
    department: "Computer Science",
    year: 3,
    level: 11,
    xp: 4310,
    xpToNextLevel: 5500,
    headline: "AI engineer. Building intelligent systems that matter.",
    skills: [
      { name: "Python", level: "expert" },
      { name: "TensorFlow", level: "proficient" },
      { name: "Computer Vision", level: "proficient" },
    ],
    guildIds: ["g-01"],
    initials: "BV",
  },
  {
    id: "s-03",
    name: "Meera Nair",
    handle: "meera",
    department: "Design",
    year: 2,
    level: 9,
    xp: 3120,
    xpToNextLevel: 4200,
    headline: "Product designer obsessed with motion and typography.",
    skills: [
      { name: "Figma", level: "expert" },
      { name: "Interaction Design", level: "proficient" },
      { name: "Frontend", level: "learning" },
    ],
    guildIds: ["g-02"],
    initials: "MN",
  },
  {
    id: "s-04",
    name: "Rahul Menon",
    handle: "rahul",
    department: "Electronics",
    year: 4,
    level: 14,
    xp: 6100,
    xpToNextLevel: 7500,
    headline: "Robotics lead. Hardware meets intelligence.",
    skills: [
      { name: "Embedded C", level: "expert" },
      { name: "ROS", level: "proficient" },
      { name: "PCB Design", level: "proficient" },
    ],
    guildIds: ["g-04"],
    initials: "RM",
  },
  {
    id: "s-05",
    name: "Sara Thomas",
    handle: "sara",
    department: "Computer Science",
    year: 2,
    level: 7,
    xp: 2050,
    xpToNextLevel: 3000,
    headline: "Security researcher in training. CTF regular.",
    skills: [
      { name: "Network Security", level: "proficient" },
      { name: "Linux", level: "proficient" },
      { name: "Reverse Engineering", level: "learning" },
    ],
    guildIds: ["g-05"],
    initials: "ST",
  },
  {
    id: "s-06",
    name: "Arjun Das",
    handle: "arjun",
    department: "Mechanical",
    year: 3,
    level: 8,
    xp: 2600,
    xpToNextLevel: 3600,
    headline: "CAD, simulation, and anything that moves.",
    skills: [
      { name: "SolidWorks", level: "expert" },
      { name: "ANSYS", level: "proficient" },
    ],
    guildIds: ["g-04"],
    initials: "AD",
  },
];

export const guilds: Guild[] = [
  {
    id: "g-01",
    name: "AI Guild",
    tagline: "Applied intelligence for real campus problems.",
    focus: "Artificial Intelligence",
    memberCount: 24,
    activeMissions: 3,
    reputation: 92,
    skills: ["Python", "PyTorch", "NLP", "Computer Vision"],
    leaderId: "s-01",
  },
  {
    id: "g-02",
    name: "Design Guild",
    tagline: "Interfaces that feel engineered, not decorated.",
    focus: "UI / UX Design",
    memberCount: 18,
    activeMissions: 2,
    reputation: 84,
    skills: ["Figma", "Design Systems", "Motion", "Research"],
    leaderId: "s-03",
  },
  {
    id: "g-03",
    name: "Web Guild",
    tagline: "Shipping production-grade web platforms.",
    focus: "Web Development",
    memberCount: 31,
    activeMissions: 4,
    reputation: 88,
    skills: ["TypeScript", "React", "Next.js", "Node.js"],
    leaderId: "s-01",
  },
  {
    id: "g-04",
    name: "Robotics Guild",
    tagline: "Hardware, autonomy, and machines with purpose.",
    focus: "Robotics",
    memberCount: 15,
    activeMissions: 2,
    reputation: 79,
    skills: ["ROS", "Embedded C", "CAD", "Control Systems"],
    leaderId: "s-04",
  },
  {
    id: "g-05",
    name: "Cyber Security Guild",
    tagline: "Defense-minded. Detail-obsessed.",
    focus: "Cyber Security",
    memberCount: 12,
    activeMissions: 1,
    reputation: 75,
    skills: ["Network Security", "Forensics", "CTF", "Linux"],
    leaderId: "s-05",
  },
];

export const missions: Mission[] = [
  {
    id: "m-01",
    title: "Campus Navigator App",
    guildId: "g-03",
    summary:
      "An indoor navigation web app for the campus with live event overlays and accessibility routing.",
    status: "active",
    progress: 64,
    requiredSkills: ["React", "TypeScript", "Mapbox"],
    memberIds: ["s-01", "s-03"],
    openRoles: 2,
    deadline: "Aug 30, 2026",
    xpReward: 850,
  },
  {
    id: "m-02",
    title: "Lecture Summarizer",
    guildId: "g-01",
    summary:
      "Automatic lecture transcription and structured summaries using on-device speech models.",
    status: "recruiting",
    progress: 12,
    requiredSkills: ["Python", "NLP", "Whisper"],
    memberIds: ["s-02"],
    openRoles: 3,
    deadline: "Sep 15, 2026",
    xpReward: 1200,
  },
  {
    id: "m-03",
    title: "Design System v1",
    guildId: "g-02",
    summary:
      "A token-driven component library documenting color, typography, and motion standards.",
    status: "active",
    progress: 78,
    requiredSkills: ["Figma", "Design Tokens", "Documentation"],
    memberIds: ["s-03"],
    openRoles: 1,
    deadline: "Jul 28, 2026",
    xpReward: 600,
  },
  {
    id: "m-04",
    title: "Autonomous Delivery Rover",
    guildId: "g-04",
    summary:
      "A line-following delivery rover for intra-campus parcel transport with obstacle avoidance.",
    status: "recruiting",
    progress: 5,
    requiredSkills: ["ROS", "Embedded C", "Computer Vision"],
    memberIds: ["s-04", "s-06"],
    openRoles: 4,
    deadline: "Nov 10, 2026",
    xpReward: 1500,
  },
  {
    id: "m-05",
    title: "CTF Training Platform",
    guildId: "g-05",
    summary:
      "An internal capture-the-flag platform with progressive challenges for security beginners.",
    status: "active",
    progress: 41,
    requiredSkills: ["Docker", "Linux", "Web Security"],
    memberIds: ["s-05"],
    openRoles: 2,
    deadline: "Oct 02, 2026",
    xpReward: 900,
  },
  {
    id: "m-06",
    title: "Hackathon Portal",
    guildId: "g-03",
    summary:
      "Registration, team formation, and live judging portal for the annual campus hackathon.",
    status: "completed",
    progress: 100,
    requiredSkills: ["Next.js", "PostgreSQL"],
    memberIds: ["s-01", "s-02", "s-03"],
    openRoles: 0,
    deadline: "Completed Jun 2026",
    xpReward: 1000,
  },
];

export const projects: Project[] = [
  {
    id: "p-01",
    title: "Hackathon Portal",
    description:
      "Full event platform used by 400+ students. Registration, team matching, and live judging.",
    technologies: ["Next.js", "PostgreSQL", "Tailwind"],
    year: "2026",
  },
  {
    id: "p-02",
    title: "Attendance Vision",
    description:
      "Face-recognition attendance prototype built for the CS department pilot program.",
    technologies: ["Python", "OpenCV", "FastAPI"],
    year: "2025",
  },
  {
    id: "p-03",
    title: "GradeLens",
    description:
      "Analytics dashboard turning raw academic data into actionable study insights.",
    technologies: ["React", "D3", "Node.js"],
    year: "2025",
  },
];

export const achievements: Achievement[] = [
  {
    id: "a-01",
    title: "Guild Founder",
    description: "Founded a Guild that reached 20+ members.",
    earnedAt: "Mar 2026",
  },
  {
    id: "a-02",
    title: "Mission Commander",
    description: "Led a Mission from creation to completion.",
    earnedAt: "Jun 2026",
  },
  {
    id: "a-03",
    title: "First Contribution",
    description: "Completed your first Mission task.",
    earnedAt: "Nov 2025",
  },
];

export const signals: Signal[] = [
  {
    id: "sig-01",
    kind: "guild_invite",
    title: "Robotics Guild invited you",
    body: "Rahul Menon invited you to join the Robotics Guild as a software contributor.",
    time: "2h ago",
    unread: true,
  },
  {
    id: "sig-02",
    kind: "mission_update",
    title: "Campus Navigator reached 64%",
    body: "Meera pushed the new routing UI. Two tasks remain in the current sprint.",
    time: "5h ago",
    unread: true,
  },
  {
    id: "sig-03",
    kind: "achievement",
    title: "Achievement unlocked — Mission Commander",
    body: "You led Hackathon Portal from creation to completion. +250 XP awarded.",
    time: "1d ago",
    unread: false,
  },
  {
    id: "sig-04",
    kind: "connection",
    title: "Sara Thomas wants to connect",
    body: "Security researcher, Cyber Security Guild. 4 shared skills.",
    time: "2d ago",
    unread: false,
  },
  {
    id: "sig-05",
    kind: "announcement",
    title: "Campus Hackathon 2026 announced",
    body: "Registrations open August 1. Form your team early through the Missions board.",
    time: "3d ago",
    unread: false,
  },
];

export function getGuild(id: string): Guild | undefined {
  return guilds.find((g) => g.id === id);
}

export function getMission(id: string): Mission | undefined {
  return missions.find((m) => m.id === id);
}

export function getStudent(id: string): Student | undefined {
  return students.find((s) => s.id === id);
}
