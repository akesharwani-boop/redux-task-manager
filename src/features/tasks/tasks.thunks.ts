// src/features/tasks/tasks.thunks.ts
import type { ThunkAction } from "redux-thunk";
import type { RootState } from "../../app/store";
import type { TasksAction } from "./tasks.actions";
import { fetchTasks } from "./fakeApi";
import { tasksLoading, tasksLoaded } from "./tasks.actions";

export const loadTasks = (): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  TasksAction
> => {
  return async (dispatch) => {
    dispatch(tasksLoading());
    const data = await fetchTasks();
    dispatch(tasksLoaded(data));
  };
};
