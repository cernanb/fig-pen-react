import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import pins from "./reducers/pins";
import user from "./reducers/userReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  pins,
  user
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
