import types from './types';

const initialState = {
  data: [],
  isLoading: true,
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_COLOR_DATA: {
      return { ...state, data: action.data };
    }
    case types.SET_COLOR_LOADING: {
      return { ...state, isLoading: action.data };
    }
    default:
      return state;
  }
};

export default colorReducer;
