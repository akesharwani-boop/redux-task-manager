import type { Task } from "./tasks.types";

export const TASKS_LOADING = "tasks/loading" as const
export const TASKS_LOADED = "tasks/loaded" as const
export const TASK_ADDED = "tasks/added" as const
export const TASK_TOGGLED = "tasks/toggled" as const 
export const TASK_DELETED = 'tasks/deleted' as const

export const tasksLoading = () => ({
  type: TASKS_LOADING,
});

export const tasksLoaded = (tasks: Task[]) => ({
  type: TASKS_LOADED,
  payload: tasks,
});

export const taskAdded = (task: Task) => ({
  type: TASK_ADDED,
  payload: task,
});
export const taskToggled = (id: number) => ({
  type: TASK_TOGGLED,
  payload: id,
});

export const taskDeleted=(id:number) => ({
    type: TASK_DELETED,
    payload:id
})

export type TasksAction =
  | ReturnType<typeof tasksLoading>
  | ReturnType<typeof tasksLoaded>
  | ReturnType<typeof taskAdded>
  | ReturnType<typeof taskToggled>
  | ReturnType<typeof taskDeleted>;
