import type { Task } from "./tasks.types";

export const TASKS_LOADING = 'tasks/loading'
export const TASKS_LOADED = 'tasks/loaded'
export const TASK_ADDED='tasks/added'
export const TASK_TOGGLED='tasks/toggled'


export const tasksLoading =()=>({
    type :TASKS_LOADING
})

export const tasksLoaded =(tasks: Task[])=>({
    type:TASKS_LOADED,
    payload:tasks

})

export const taskAdded = (task:Task)=>({
    type:TASK_ADDED,
     payload: task
})
export const taskToggled =(id:number)=>({
    type:TASK_TOGGLED,
    payload:id
})