import React from 'react';
import { connect } from 'react-redux';
import { Empty } from 'antd';
import Loader from '../../components/Loader/Loader';
import CartList from '../../components/CartList/CartList';

const Cart = ({ cart, isLoading }) => {
  return (
    <div className="wrapper">
      <p className="page__title">Корзина</p>
      {cart === null || cart.products.length === 0 ? (
        <div className="favoriteslist--empty">
          <Empty />
          <h3 className="empty__title">Нет товаров в корзине</h3>
          <h4 className="empty__subtitle">Но это никогда не поздно исправить &#128515;</h4>
        </div>
      ) : (
        <div className="productsList--content"> {isLoading ? <Loader /> : <CartList />} </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart.data,
    isLoading: state.cart.isLoading,
  };
};

export default connect(mapStateToProps)(Cart);
