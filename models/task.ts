import { create } from 'zustand';

export interface TaskInfo {
  title: string;
  description: string;
  isComplete: boolean;
  startTime: Date;
  endTime: Date;
}

interface TaskStore {
  tasks: TaskInfo[];
  createTask: (task: TaskInfo) => void;
  deleteTask: (index: number) => void;
  completeTask: (index: number) => void;
}

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],

  createTask: (task) => {
    set((state) => ({
      tasks: [...state.tasks, task],
    }));
  },

  deleteTask: (index) => {
    set((state) => ({
      tasks: state.tasks.filter((_, idx) => idx !== index),
    }));
  },

  completeTask: (index) => {
    const updatedTasks = get().tasks.map((task, idx) =>
      idx === index ? { ...task, isComplete: true } : task
    );
    set({ tasks: updatedTasks });
  },
}));
