import types from './typesCart';

const setCartData = (cartData) => ({
  type: types.SET_CART_DATA,
  data: cartData,
});
const setCartLoading = (isLoading) => ({ type: types.SET_CART_LOADING, data: isLoading });

export default {
  setCartData,
  setCartLoading,
};
