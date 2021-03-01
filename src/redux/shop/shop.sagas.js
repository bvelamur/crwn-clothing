import { all, call, put, takeLatest } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";
// Redux saga tries to run all these generators run at the same time
// If multiple sagas are listening, we don't want our code to wait.
// If the data comes back, we want them to run
// takeEvery creates a non-blocking call that allows our application
// to run.

// eslint-disable-next-line require-yield
export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collection");
    const snapshot = yield collectionRef.get();
    // call is the affect inside our generator function that calls functions
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    // put is the way to dispatch in sagas
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
      yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}

export function* shopSagas() {
  yield all([
    call(fetchCollectionStart)
  ]);
}
