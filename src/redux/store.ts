import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export type rootStore = ReturnType<typeof rootReducer>

export default store