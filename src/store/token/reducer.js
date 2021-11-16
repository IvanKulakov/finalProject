import types from './types';

const initialState = {
  data: [],
  isLoading: true,
};

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TOKEN_DATA: {
      return { ...state, data: action.data };
    }
    case types.SET_TOKEN_LOADING: {
      return { ...state, isLoading: action.data };
    }
    default:
      return state;
  }
};

export default tokenReducer;
