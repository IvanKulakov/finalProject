import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Button, message } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import './CartBtn.scss';
import { cartOperations } from '../../store/cart/indexCart';

const CartBtn = ({ item, postCart, disabled }) => {
  /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
  const id = item._id;
  const cartAdd = () => {
    postCart(id);
    message.success(`${item.name} добавлен в корзину. Спасибо!`, 2);
  };
  return (
    <div>
      <Button
        type="primary"
        disabled={disabled}
        shape="round"
        icon={<ShoppingCartOutlined />}
        onClick={cartAdd}
        className="cart__button"
      >
        Добавить в корзину
      </Button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    item: state.item.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    postCart: (data) => dispatch(cartOperations.postCart(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartBtn);
