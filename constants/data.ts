import { TaskInfo } from "@/models/task";

export const dummyTasks: TaskInfo[] = [
  {
    title: "Write blog post",
    description: "Write and edit a new blog post about React hooks.",
    isComplete: false,
    startTime: new Date("2025-06-14T09:00:00"),
    endTime: new Date("2025-06-14T11:00:00"),
  },
  {
    title: "Team Meeting",
    description: "Weekly sync-up with the product and design team.",
    isComplete: true,
    startTime: new Date("2025-06-13T10:00:00"),
    endTime: new Date("2025-06-13T11:00:00"),
  },
  {
    title: "Update Portfolio",
    description: "Add recent projects to the portfolio site.",
    isComplete: false,
  },
  {
    title: "Read Book",
    description: "Finish reading chapter 4 of 'Clean Code'.",
    startTime: new Date("2025-06-14T20:00:00"),
    endTime: new Date("2025-06-14T21:30:00"),
  },
  {
    title: "Fix Login Bug",
    description: "Resolve issue with session persistence on mobile.",
    isComplete: true,
    startTime: new Date("2025-06-12T14:00:00"),
    endTime: new Date("2025-06-12T15:00:00"),
  },
  {
    title: "Create UI Components",
    description: "Design and build reusable UI components in React.",
    isComplete: false,
    startTime: new Date("2025-06-15T10:00:00"),
  },
  {
    title: "Deploy Backend",
    description: "Deploy latest backend updates to production.",
    isComplete: true,
  },
  {
    title: "Workout",
    description: "Morning workout session - cardio and strength.",
    startTime: new Date("2025-06-14T06:30:00"),
    endTime: new Date("2025-06-14T07:30:00"),
  },
  {
    title: "Prepare Interview Questions",
    description: "Draft and review technical interview questions.",
    isComplete: false,
    startTime: new Date("2025-06-14T13:00:00"),
    endTime: new Date("2025-06-14T14:30:00"),
  },
  {
    title: "Buy Groceries",
    description: "Pick up weekly groceries from the supermarket.",
    isComplete: true,
  },
];
