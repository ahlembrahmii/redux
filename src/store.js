import { createStore } from "redux";
import rootReducer from "./redux/reducers";

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devtools);

export default store;
