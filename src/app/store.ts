import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import { persistStore } from "redux-persist";
import type { ThunkDispatch } from "redux-thunk";
import type { AnyAction } from "redux";

export const store = createStore(
  rootReducer,
  composeWithDevToolsDevelopmentOnly(
    applyMiddleware(thunk)
  )
);

export const persistor = persistStore(store); 

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
