import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { openAiReducer } from "./reducer/openAiReducer";

const rootReducer = combineReducers({
  openAi: openAiReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
