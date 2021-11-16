import types from './types';

const initialState = {
  data: [],
  isLoading: true,
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_HISTORY_DATA: {
      return { ...state, data: action.data };
    }
    case types.SET_HISTORY_LOADING: {
      return { ...state, isLoading: action.data };
    }
    default:
      return state;
  }
};

export default historyReducer;
