import types from './types';

const setCustomerData = (itemData) => ({ type: types.SET_CUSTOMER_DATA, data: itemData });
const setCustomerDataMsg = (itemData) => ({ type: types.SET_CUSTOMER_DATA_MSG, message: itemData });
const setCustomerLoading = (isLoading) => ({ type: types.SET_CUSTOMER_LOADING, data: isLoading });

export default {
  setCustomerData,
  setCustomerLoading,
  setCustomerDataMsg,
};
