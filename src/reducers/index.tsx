import { combineReducers } from "redux";
import { tictacReducer } from "./tictacReducer";

export const rootReducer = combineReducers({

   tictacData: tictacReducer
})

export type RootState = ReturnType<typeof rootReducer>