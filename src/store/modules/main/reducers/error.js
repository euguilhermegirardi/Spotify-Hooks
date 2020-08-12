const INITIAL_STATE = {
  visible: false,
  message: null,
};

export default function error(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'error/SET':
      return { ...state, visible: true, message: action.message };

    case 'error/HIDE':
      return { ...state, visible: false };

    default:
      return state;
  }
}
