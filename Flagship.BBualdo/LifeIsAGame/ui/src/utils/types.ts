export type DifficultiesType =
  | "Daily"
  | "Drop of Sweat"
  | "Challenging"
  | "Life-Hacker"
  | "Anti-Procrastinator";

export type DifficultyLevel = {
  id: number;
  title: DifficultiesType;
  description: string;
  eg: { id: number; title: string }[];
  xpMultiplier: number;
};

export type Level = { level: number; ceil: number };
