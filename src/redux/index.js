import { createStore, applyMiddleware, compose } from "redux";
import pinsReducer from "./reducers/pins";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(pinsReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
