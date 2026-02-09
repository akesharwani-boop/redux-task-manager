import {combineReducers} from 'redux'

import { tasksReducer } from '../features/tasks/tasks.reducers'

export const rootReducer =combineReducers({
    tasks : tasksReducer
})

export type RootState =ReturnType<typeof rootReducer>