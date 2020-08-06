import { call, put, all, takeEvery } from "redux-saga/effects";

import api from "../../services/api";
import { Creators as PlaylistsActions } from "../ducks/playlists";
import { Creators as PlaylistDetailsActions } from "../ducks/playlistDetails";
import { Creators as ErrorActions } from "../ducks/error";

function* getPlaylists() {
  try {
    const response = yield call(api.get, "/playlists");

    yield put(PlaylistsActions.getPlaylistsSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError("Was not possible to get the playlists"));
  }
}

function* watchGetPlaylists() {
  yield takeEvery('playlists/GET_REQUEST', getPlaylists)
}

function* getPlaylistDetails(action) {
  try {
    const response = yield call(
      api.get,
      `/playlists/${action.payload.id}?_embed=songs`
    );

    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(response.data));
  } catch (err) {
    yield put(
      ErrorActions.setError("Was not possible to get the playlist details.")
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
