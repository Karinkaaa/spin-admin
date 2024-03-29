import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { IMAGES_API } from "../../utils/apiLinks";
import { UPDATE_IMAGE_SAGA } from "../../utils/actionSagaConstants";
import { getImagesSaga } from "../../actions/imagesSaga";

export function* updateImageSaga(action) {
    const { id, image } = action;

    yield call(axios.put, IMAGES_API + "/" + id, { image });
    yield put(getImagesSaga());
}

export function* watchUpdateImageSaga() {
    yield takeEvery(UPDATE_IMAGE_SAGA, updateImageSaga);
}