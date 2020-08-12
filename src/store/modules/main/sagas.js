import { call, put, all, takeEvery } from "redux-saga/effects";

import api from "../../../services/api";
import { getPlaylistsSuccess, getPlaylistDetailsSuccess, setError } from './actions';

function* getPlaylists() {
  try {
    const response = yield call(api.get, "/playlists");

    yield put(getPlaylistsSuccess(response.data));
  } catch (err) {
    yield put(setError("Was not possible to get the playlists"));
  }
}

function* watchGetPlaylists() {
  yield takeEvery('playlists/GET_REQUEST', getPlaylists)
}

function* getPlaylistDetails(action) {
  try {
    const response = yield call(
      api.get,
      `/playlists/${action.id}?_embed=songs`
    );

    yield put(getPlaylistDetailsSuccess(response.data));
  } catch (err) {
    yield put(
      setError("Was not possible to get the playlist details.")
    );
  }
}

function* watchGetPlaylistDetails() {
  yield takeEvery('playlistDetails/GET_REQUEST', getPlaylistDetails)
}


export default function* watchAll() {
  yield all([
    watchGetPlaylists(),
    watchGetPlaylistDetails()
  ])
}
