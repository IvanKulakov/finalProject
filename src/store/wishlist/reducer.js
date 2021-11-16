import types from './types';

const initialState = {
  data: [],
  isLoading: true,
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_WISHLIST_DATA: {
      return { ...state, data: action.data };
    }
    case types.SET_WISHLIST_LOADING: {
      return { ...state, isLoading: action.data };
    }
    default:
      return state;
  }
};

export default wishlistReducer;
