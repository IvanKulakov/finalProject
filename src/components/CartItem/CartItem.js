import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, message } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import './CartItem.scss';
import { cartOperations } from '../../store/cart/indexCart';

const CartItem = ({ item, cartQuantity, deleteCart, deleteOneItemCart, postCart }) => {
  /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
  const id = item._id;
  const [counter, setCounter] = useState(cartQuantity);
  const [finalPrice, setFinalPrice] = useState(counter * item.currentPrice);
  const expandItem = `/shop/${item.itemNo}`;
  const addUnit = () => {
    const unit = counter + 1;
    setCounter(unit);
    setFinalPrice(unit * item.currentPrice);
    postCart(id);
  };
  const delUnit = () => {
    const unit = counter - 1;
    setCounter(unit);
    setFinalPrice(unit * item.currentPrice);
    deleteOneItemCart(id);
  };
  const deleteItem = () => {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
    deleteCart(id);
    message.success(`${item.name} Удален из корзины. А жаль!`, 2);
  };
  return (
    <>
      <div className="cart-item__wrapper">
        <div className="cart__img">
          <a href={expandItem}>
            <img alt={item.name} src={item.imageUrls[0]} />
          </a>
        </div>
        <div className="cart-info__wrapper">
          <div className="cart-item__info">
            <h5 className="item__name item__name--cart">{item.name}</h5>
            <p>{item.itemNo}</p>
          </div>
          <div className="cart__counter cart__counter--item">
            <Button onClick={delUnit} disabled={counter <= 1 ? true : ''}>
              -
            </Button>
            <Button>{counter}</Button>
            <Button onClick={addUnit} disabled={counter >= item.quantity ? true : ''}>
              +
            </Button>
          </div>
          <div>
            <div className="cart-price__wrapper">
              <p className="total-item__price">{finalPrice}₴</p>
              <p>
                {counter} * {item.currentPrice}₴
              </p>
            </div>
            <Button
              className="button__delete--item"
              type="primary"
              shape="round"
              icon={<CloseCircleOutlined />}
              onClick={deleteItem}
            >
              Удалить
            </Button>
          </div>
        </div>
      </div>
      <div className="cart__buttons">
        <Button type="primary" shape="round" icon={<CloseCircleOutlined />} onClick={deleteItem}>
          Удалить
        </Button>
        <div className="cart__counter">
          <Button onClick={delUnit} disabled={counter <= 1 ? true : ''}>
            -
          </Button>
          <Button>{counter}</Button>
          <Button onClick={addUnit} disabled={counter >= item.quantity ? true : ''}>
            +
          </Button>
        </div>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteCart: (data) => dispatch(cartOperations.deleteCart(data)),
    deleteOneItemCart: (data) => dispatch(cartOperations.deleteOneItemCart(data)),
    postCart: (data) => dispatch(cartOperations.postCart(data)),
  };
};
export default connect(null, mapDispatchToProps)(CartItem);
