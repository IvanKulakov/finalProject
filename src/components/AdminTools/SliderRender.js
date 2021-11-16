import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Input, Modal } from 'antd';
import { slidesOperations } from '../../store/slides';

const SliderRender = ({ item, dispatch }) => {
  const { name, description, customId, imageUrl } = item;
  const [newImageUrl, setNewImageUrl] = useState(imageUrl);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    const updatedSlide = {
      imageUrl: newImageUrl,
    };
    dispatch(slidesOperations.updateSlides(customId, updatedSlide));
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="card card__slider">
      <p>{name}</p>
      <p>{description}</p>
      <p>{customId}</p>
      <img alt={name} src={imageUrl} width="361px" />

      <Modal
        title="Изменить слайд"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          placeholder={imageUrl}
          value={newImageUrl}
          onInput={(e) => setNewImageUrl(e.target.value)}
        />
      </Modal>
      <div className="button-box">
        <Button type="primary" onClick={showModal}>
          Изменить
        </Button>
        <Button type="primary" onClick={() => dispatch(slidesOperations.deleteSlides(customId))}>
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default connect(null)(SliderRender);
