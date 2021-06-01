import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { GET_IMAGE_BY_ID_SAGA } from "../../utils/actionSagaConstants";
import { IMAGES_API } from "../../utils/apiLinks";
import { isOpenImageModal, setImageForm } from "../../actions/imageResourceForm";

export function* getImageByIdSaga(action) {
    const { id } = action;
    const result = yield call(axios.get, IMAGES_API + "/" + id);

    yield put(isOpenImageModal(true));
    yield put(setImageForm(result.data.image));
}

export function* watchGetImageByIdSaga() {
    yield takeEvery(GET_IMAGE_BY_ID_SAGA, getImageByIdSaga);
}