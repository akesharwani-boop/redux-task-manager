import { createStore, applyMiddleware } from "redux";
import thunk , {type ThunkDispatch}  from 'redux-thunk'
import { rootReducer } from "./rootReducer";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension"
import type {AnyAction} from  'redux'
export const store = createStore(rootReducer, composeWithDevToolsDevelopmentOnly(
    applyMiddleware(thunk)
)
)
export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = ThunkDispatch<
  RootState,
  unknown,
  AnyAction
>;