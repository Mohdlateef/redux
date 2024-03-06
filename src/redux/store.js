import { createStore,combineReducers } from "redux";
import counterReducer from "./reducres/counterReducre";
import movieReducer from "./reducres/moiveReducer";

let rootReducer=combineReducers({
count:counterReducer,
song:movieReducer,
})


const store=createStore(rootReducer);
export default store;