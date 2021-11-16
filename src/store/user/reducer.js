import types from './types';

const initialState = {
  data: [],
  message: null,
  isLoading: true,
};
const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CUSTOMER_DATA: {
      return { ...state, data: action.data };
    }
    case types.SET_CUSTOMER_DATA_MSG: {
      return { ...state, message: action.data };
    }
    case types.SET_CUSTOMER_LOADING: {
      return { ...state, isLoading: action.data };
    }
    default:
      return state;
  }
};

export default customerReducer;
