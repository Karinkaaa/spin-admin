import {combineReducers, createStore} from "redux";
import resources from "./reducers/Images";
import createForm from "./reducers/CreateResourceForm";

const reducers = combineReducers({
    resources,
    createForm
})

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;