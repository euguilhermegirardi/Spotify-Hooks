import Sound from 'react-sound';

const INITIAL_STATE = {
  currentSong: null,
  list: [],
  status: Sound.status.PLAYING,
  position: null,
  positionShown: null,
  duration: null,
  volume: 100,
};

export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {

    case 'player/LOAD':
      return { ...state, currentSong: action.song, list: action.list, status: Sound.status.PLAYING, position: 0  };

    case 'player/PLAY':
      return { ...state, status: Sound.status.PLAYING };

    case 'player/PAUSE':
      return { ...state, status: Sound.status.PAUSED};

    case 'player/PREV': {
      const currentIndex = state.list.findIndex(song => song.id === state.currentSong.id);

      const prev = state.list[currentIndex - 1];

      if (prev) {
        return { ...state, currentSong: prev, status: Sound.status.PLAYING, position: 0 };
      }
      return state;
    }

    case 'player/NEXT': {
      const currentIndex = state.list.findIndex(song => song.id === state.currentSong.id);
      const next = state.list[currentIndex + 1];

      if (next) {
        return { ...state, currentSong: next, status: Sound.status.PLAYING, position: 0 };
      }

      return state;
    }

    case 'player/PLAYING': {
      return { ...state, position: action.position, duration: action.duration };
    }

    case 'player/HANDLE_POSITION': {
      return { ...state, positionShown: state.duration * action.percent };
    }

    case 'player/SET_POSITION': {
      return { ...state, position: state.duration * action.percent, positionShown: null };
    }

    case 'player/SET_VOLUME': {
      return { ...state, volume: action.volume};
    }

    case 'player/REPEAT': {
      const currentIndex = state.list.findIndex(song => song.id === state.currentSong.id);
      const repeat = state.list[currentIndex];

      if (repeat) {
        return { ...state, currentSong: repeat, status: Sound.status.PLAYING };
      }

      return state;
    }

    default:
      return state;
  }
}
