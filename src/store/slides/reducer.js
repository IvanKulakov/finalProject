import types from './types';

const initialState = {
  data: [],
  isLoading: true,
};

const slidesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SLIDES_DATA: {
      return { ...state, data: action.data };
    }
    case types.GET_SLIDES_LOADING: {
      return { ...state, isLoading: action.data };
    }
    default:
      return state;
  }
};

export default slidesReducer;
