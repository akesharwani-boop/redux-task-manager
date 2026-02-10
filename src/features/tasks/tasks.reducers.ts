import type { TasksState } from "./tasks.types";
import type { TasksAction } from "./tasks.actions";
import {
  TASKS_LOADING,
  TASKS_LOADED,
  TASK_ADDED,
  TASK_TOGGLED,
  TASK_DELETED,
} from "./tasks.actions";

const initialState: TasksState = {
  items: [],
  status: "idle",
};

export function tasksReducer(
  state = initialState,
  action: TasksAction,
): TasksState {
  switch (action.type) {
    case TASKS_LOADING:
      return {
        ...state,
        status: "loading",
      };

    case TASKS_LOADED:
      return {
        ...state,
        status: "idle",
        items: action.payload,
      };

    case TASK_ADDED:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case TASK_TOGGLED:
      return {
        ...state,
        items: state.items.map((task) =>
          task.id == action.payload
            ? { ...task, completed: !task.completed }
            : task,
        ),
      };
    case TASK_DELETED:
      return {
        ...state,
        items: state.items.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
}
