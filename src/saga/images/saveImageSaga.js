import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { IMAGES_API } from "../../utils/apiLinks";
import { SAVE_IMAGE_SAGA } from "../../utils/actionSagaConstants";
import { getImagesSaga } from "../../actions/imagesSaga";

export function* saveImageSaga(action) {
    const { image } = action;

    yield call(axios.post, IMAGES_API, { image });
    yield put(getImagesSaga());
}

export function* watchSaveImageSaga() {
    yield takeEvery(SAVE_IMAGE_SAGA, saveImageSaga);
}