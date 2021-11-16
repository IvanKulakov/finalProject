import types from './types';

const initialState = {
  data: [],
  isLoading: true,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PRODUCTS_DATA: {
      return { ...state, data: action.data };
    }
    case types.SET_PRODUCTS_LOADING: {
      return { ...state, isLoading: action.data };
    }
    default:
      return state;
  }
};

export default productsReducer;
