import { combineReducers } from 'redux';

import playlists from './main/reducers/playlists';
import playlistDetails from './main/reducers/playlistDetails';
import error from './main/reducers/error';
import player from './main/reducers/player';

export default combineReducers({
  playlists,
  playlistDetails,
  error,
  player
});
