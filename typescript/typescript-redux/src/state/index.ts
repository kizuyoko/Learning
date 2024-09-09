import { combineReducers } from "redux";
// Import your reducers here

const rootReducer = combineReducers({
  // your reducers
});

export * from "./store";
export * as actionCreators from './action-creators';
export * from './reducers';

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;