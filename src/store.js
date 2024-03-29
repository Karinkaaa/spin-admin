import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import mainSaga from "./saga";
import audioPlayer from "./reducers/audioPlayer";
import movieForm from "./reducers/movieForm";
import table from "./reducers/table";
import form from "./reducers/form";
import dictionary from "./reducers/dictionary";
import background from "./reducers/background";

const reducers = combineReducers({
    audioPlayer,
    movieForm,
    table,
    form,
    dictionary,
    background
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers,
    composeWithDevTools(applyMiddleware(
        sagaMiddleware
    ))
);

sagaMiddleware.run(mainSaga);

export default store;
