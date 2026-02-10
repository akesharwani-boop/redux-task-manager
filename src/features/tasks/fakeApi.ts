import type { Task } from "./tasks.types";

export const fetchTasks = (): Promise<Task[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Learn Redux", completed: false },
        { id: 2, title: "Build mini project", completed: true },
      ]);
    }, 800);
  });
