import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';
import { connect } from 'react-redux';
import { commentOperations } from '../../store/comment';
import './adminTools.scss';

const CommentsRender = ({ name, comment, customer, id, dispatch }) => {
  const [input, setInput] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    const updatedComment = {
      content: input,
    };
    dispatch(commentOperations.updateComment(id, updatedComment));
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="card">
      <p>Товар: {name}</p>
      <p>{comment}</p>
      <p>Автор: {customer}</p>
      <div className="button-box">
        <Button type="primary" onClick={() => dispatch(commentOperations.deleteComment(id))}>
          Удалить
        </Button>
        <Button type="primary" onClick={showModal}>
          Изменить
        </Button>
        <Modal
          title="Изменить комментарий"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Input placeholder={comment} value={input} onInput={(e) => setInput(e.target.value)} />
        </Modal>
      </div>
    </div>
  );
};

export default connect(null)(CommentsRender);
