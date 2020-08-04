const INITIAL_STATE = {
  data: []
}

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'playlists/GET_REQUEST':
      return { ...state };

    case 'playlists/GET_SUCCESS':
      return { ...state, data: action.payload.data};

    default:
      return state;
  }
}
