const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'playlists/GET_REQUEST':
      return { ...state, loading: true };

    case 'playlists/GET_SUCCESS':
      return {...state, loading: false, data: action.data }

    default:
      return state;
  }
}
