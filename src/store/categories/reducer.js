import types from './types';

const initialState = {
  data: [],
  isLoading: true,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CATEGORIES_DATA: {
      return { ...state, data: action.data };
    }
    case types.SET_CATEGORIES_LOADING: {
      return { ...state, isLoading: action.data };
    }
    default:
      return state;
  }
};

export default categoriesReducer;
