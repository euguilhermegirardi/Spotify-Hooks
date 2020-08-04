import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import { getPlaylistsSuccess } from './actions';

export default function* getPlaylists() {
  try {
    const response = yield call(api.get, '/playlists');

    console.log(response, 'Worked son of bitch!');
    yield put(getPlaylistsSuccess(response.data));

  } catch (err) {
    console.log('error shitty')
  }
}
