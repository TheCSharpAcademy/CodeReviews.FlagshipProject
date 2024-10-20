import { DifficultyLevel } from "../utils/types";

export const difficultyLevels: DifficultyLevel[] = [
  {
    id: 0,
    title: "Daily",
    description: "Quick and easy tasks for your daily routine.",
    eg: [
      { id: 0, title: "Doing laundry" },
      { id: 1, title: "Washing dishes" },
      { id: 2, title: "Taking a short walk" },
    ],
    xpMultiplier: 1,
  },
  {
    id: 1,
    title: "Drop of Sweat",
    description: "Tasks that require a moderate amount of effort and focus.",
    eg: [
      { id: 0, title: "Going to the gym" },
      { id: 1, title: "Cooking a special meal" },
      { id: 2, title: "Reading a chapter of a book" },
    ],
    xpMultiplier: 1.25,
  },
  {
    id: 2,
    title: "Challenging",
    description: "Challenging tasks that may take some time to complete.",
    eg: [
      { id: 0, title: "Learning a new language" },
      { id: 1, title: "Completing a complex workout routine" },
      { id: 2, title: "Starting a personal blog" },
    ],
    xpMultiplier: 2,
  },
  {
    id: 3,
    title: "Life-Hacker",
    description: "Challenging tasks for those seeking personal growth.",
    eg: [
      { id: 0, title: "Participating in a fitness challenge" },
      { id: 1, title: "Embarking on a weekend adventure" },
      { id: 2, title: "Learning a complex skill" },
    ],
    xpMultiplier: 3.25,
  },
  {
    id: 4,
    title: "Anti-Procrastinator",
    description: "Epic tasks for those aiming for significant achievements.",
    eg: [
      { id: 0, title: "Writing a book" },
      { id: 1, title: "Completing a marathon" },
      { id: 2, title: "Starting a business" },
    ],
    xpMultiplier: 5,
  },
];
