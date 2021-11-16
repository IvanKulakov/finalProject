import actions from '../store/token/actions';
import actionsCart from '../store/cart/actionsCart';
import actionsCustomer from '../store/user/actions';

export const logOut = ({ dispatch, hist }) => {
  dispatch(actions.setToken(``));
  dispatch(actionsCart.setCartData(null));
  dispatch(actionsCustomer.setCustomerData([]));
  localStorage.setItem('token', JSON.stringify(''));
  hist.push('/');
};
