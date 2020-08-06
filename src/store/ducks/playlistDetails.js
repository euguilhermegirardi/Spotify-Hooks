export const Types = {
  GET_REQUEST: 'playlistDetails/GET_REQUEST',
  GET_SUCCESS: 'playlistDetails/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: {},
  loading: false,
};

// Reducer
export default function playlistDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'playlistDetails/GET_REQUEST':
      return { ...state, loading: true };

    case 'playlistDetails/GET_SUCCESS':
      return { ...state, loading: false, data: action.payload.data };

    default:
      return state;
  }
}

// Action Creators
export const Creators = {
  getPlaylistDetailsRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id },
  }),

  getPlaylistDetailsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
