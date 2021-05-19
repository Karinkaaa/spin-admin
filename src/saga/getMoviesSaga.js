import *  as axios from "axios";
import { call, put, takeEvery, select } from "redux-saga/effects";
import { setMoviesSaga, setTotalMoviesCount } from "../actions/movies";
import { MOVIES_API } from "../utils/apiLinks";
import { GET_MOVIES_SAGA } from "../utils/actionConstants";

export function* getMoviesSaga() {
    const count = yield select(state => state.movies.count);
    const pagination = yield select(state => state.movies.pagination);
    const sorting = yield select(state => state.movies.sorting);
    const filters = yield select(state => state.movies.filters);

    const result = yield call(axios.get, MOVIES_API, { params: { count, filters, pagination, sorting } });

    yield put(setMoviesSaga(result.data.movies));
    yield put(setTotalMoviesCount(result.data.count));
}

export function* watchGetMoviesSaga() {
    yield takeEvery(GET_MOVIES_SAGA, getMoviesSaga);
}