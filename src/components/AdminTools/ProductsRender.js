import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Input, Modal } from 'antd';
import { productsOperations } from '../../store/products';
import './adminTools.scss';

const ProductsRender = ({ item, dispatch }) => {
  /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
  const id = item._id;
  const { name, quantity, currentPrice } = item;
  const [newName, setNewName] = useState(name);
  const [newQuantity, setNewQuantity] = useState(quantity);
  const [newCurrentPrice, setNewCurrentPrice] = useState(currentPrice);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    const updatedProduct = {
      name: newName,
      quantity: newQuantity,
      currentPrice: newCurrentPrice,
    };
    dispatch(productsOperations.updateProduct(id, updatedProduct));
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="card card__product">
      <p>{name}</p>
      <img alt={name} className="product__img" src={item.imageUrls[0]} width="80px" />
      <div>
        <Button type="primary" onClick={showModal}>
          Изменить
        </Button>
        <Modal
          title="Изменить продукт"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Input placeholder={name} value={newName} onInput={(e) => setNewName(e.target.value)} />
          <Input
            placeholder={quantity}
            value={newQuantity}
            onInput={(e) => setNewQuantity(e.target.value)}
          />
          <Input
            placeholder={currentPrice}
            value={newCurrentPrice}
            onInput={(e) => setNewCurrentPrice(e.target.value)}
          />
        </Modal>
      </div>
    </div>
  );
};

export default connect(null)(ProductsRender);
