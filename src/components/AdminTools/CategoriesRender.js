import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Input, Modal } from 'antd';
import { categoriesOperations } from '../../store/categories';
import './adminTools.scss';

const CategoriesRender = ({ id, name, dispatch }) => {
  const [nameData, setNameData] = useState(name);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    const updatedCategory = {
      name: nameData,
    };
    dispatch(categoriesOperations.updateCategories(id, updatedCategory));
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="card">
      <p>id = {id}</p>
      <p>name = {name}</p>
      <Button type="primary" onClick={showModal}>
        Изменить
      </Button>
      <Modal
        title="Изменить категорию"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          placeholder={nameData}
          value={nameData}
          onInput={(e) => setNameData(e.target.value)}
        />
      </Modal>
      <Button type="primary" onClick={() => dispatch(categoriesOperations.deleteCategories(id))}>
        Удалить
      </Button>
    </div>
  );
};

export default connect(null)(CategoriesRender);
