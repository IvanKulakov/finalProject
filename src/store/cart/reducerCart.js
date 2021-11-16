import types from './typesCart';

const initialState = {
  data: null,
  isLoading: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CART_DATA: {
      return { ...state, data: action.data };
    }
    case types.SET_CART_LOADING: {
      return { ...state, isLoading: action.data };
    }
    default:
      return state;
  }
};

export default cartReducer;
