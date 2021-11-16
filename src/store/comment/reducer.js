import types from './types';

const initialState = {
  data: [],
  isLoading: true,
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_COMMENT_DATA: {
      return { ...state, data: action.data };
    }
    case types.SET_COMMENT_LOADING: {
      return { ...state, isLoading: action.data };
    }
    default:
      return state;
  }
};

export default commentReducer;
