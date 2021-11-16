import types from './types';

const initialState = {
  data: [],
  isLoading: true,
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FAVORITES_DATA: {
      return { ...state, data: action.data };
    }
    case types.SET_FAVORITES_LOADING: {
      return { ...state, isLoading: action.data };
    }
    default:
      return state;
  }
};

export default favoritesReducer;
