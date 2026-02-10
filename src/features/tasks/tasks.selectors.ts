import type{ RootState } from "../../app/rootReducer";
export const selectTasks =(state:RootState) => state.tasks.items
export const selectStatus= (state:RootState) => state.tasks.status