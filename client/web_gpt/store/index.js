import { appendMutableCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { legacy_createStore as createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { openAiReducer } from "./reducer/openAiReducer";

const rootReducer = combineReducers({
  openAi: openAiReducer,
});

const store = createStore(rootReducer, appendMutableCookies(thunk));

export default store;
