const INITIAL_STATE = {
  data: {},
  loading: false,
};

export default function playlistDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'playlistDetails/GET_REQUEST':
      return { ...state, loading: true };

    case 'playlistDetails/GET_SUCCESS':
      return { ...state, loading: false, data: action.data };

    default:
      return state;
  }
}
