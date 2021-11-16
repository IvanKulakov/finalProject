import types from './types';

const initialState = {
  allCategories: [],
  name: null,
  category: null,
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FILTER_NAME: {
      return { ...state, name: action.data };
    }
    case types.SET_FILTER_CATEGORY: {
      return { ...state, category: action.data };
    }
    case types.CLEAR_FILTERS: {
      return { ...initialState, allCategories: state.allCategories };
    }
    case types.SET_ALL_CATEGORIES: {
      return { ...state, allCategories: action.data };
    }
    default:
      return state;
  }
};

export default filtersReducer;
