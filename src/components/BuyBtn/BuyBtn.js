import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { DollarCircleOutlined } from '@ant-design/icons';
import { cartClearAndTelegram } from '../../helpers/index';
import './BuyBtn.scss';

const BuyBtn = ({ customer, cart, dispatch }) => {
  const coast = cart.products
    .map((item) => [`Name: ${item.product.name}`, `Quantity:${item.cartQuantity}`].join(','))
    .join(';');
  return (
    <div className="buy-btn__wrapper">
      <Button
        type="primary"
        shape="round"
        icon={<DollarCircleOutlined />}
        onClick={() => cartClearAndTelegram({ customer, dispatch, coast })}
      >
        Подтвердить заказ
      </Button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    customer: state.customer.data,
    cart: state.cart.data,
  };
};

export default connect(mapStateToProps)(BuyBtn);

// https://api.telegram.org/bot2103225611:AAHw6eCm39TnDAl6FJBxHyR04l6-LGYFf5A/getUpdates
