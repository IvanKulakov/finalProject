import React from 'react';
import { connect } from 'react-redux';
import './CartList.scss';
import CartItem from '../CartItem/CartItem';
import BuyBtn from '../BuyBtn/BuyBtn';

const CartList = ({ cart }) => {
  const totalSumCart = cart.products
    .map((item) => item.product.currentPrice * item.cartQuantity)
    .reduce((result, a) => result + a, 0);
  const cartList = cart.products.map((item) => {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
    return <CartItem item={item.product} key={item.product._id} cartQuantity={item.cartQuantity} />;
  });
  return (
    <div className="cart-list__wrapper wrapper">
      <div>{cartList}</div>
      <div className="cart-total-price__block">
        <p className="cart-total-price">Итоговая сумма вашего заказа : {totalSumCart}₴</p>
        <BuyBtn />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart.data,
    isLoading: state.cart.isLoading,
  };
};

export default connect(mapStateToProps)(CartList);
