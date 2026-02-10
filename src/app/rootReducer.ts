import { combineReducers } from "redux";
import { tasksReducer } from "../features/tasks/tasks.reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["tasks"], 
};

const appReducer = combineReducers({
  tasks: tasksReducer,
});

export const rootReducer = persistReducer(
  rootPersistConfig,
  appReducer
);

export type RootState = ReturnType<typeof rootReducer>;
