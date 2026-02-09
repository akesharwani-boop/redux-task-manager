import type{ TasksState } from "./tasks.types";

import {
    TASKS_LOADING,
    TASKS_LOADED,
    TASK_ADDED,
    TASK_TOGGLED
} from './tasks.actions'

const initialState : TasksState ={
    items :[],
    status :'idle'
}

export function tasksReducer (
    state=initialState,
    action :any

):TasksState{
    switch (action.type){
        case TASKS_LOADING:
            return {
                ...state,
                status:'loading'
            }

            case TASKS_LOADED :
                return {
                    ...state,
                    status :'idle',
                    items:action.payload
                }

                case TASK_ADDED : 
                return {
                    ...state,
                    items :[...state.items, action.payload]
                }

                case TASK_TOGGLED :
                    return {
                        ...state,
                        items : state.items.map (task =>
                            task.id == action.payload
                            ? {...task, completed : !task.completed}
                            :task
                        )
                    }
                    default:
                        return state
    }
}