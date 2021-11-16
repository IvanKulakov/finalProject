import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { Button, Input } from 'antd';
import { slidesOperations } from '../../store/slides';

const AddSlide = ({ dispatch }) => {
  const hist = useHistory();
  const [customId, setCustomId] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const addNewSlide = () => {
    const newSlide = {
      customId: customId,
      imageUrl: imageUrl,
      description: description,
    };
    dispatch(slidesOperations.addNewSlides(newSlide));
    hist.push('/');
  };
  return (
    <div>
      <p>Добавить слайд</p>
      <Input placeholder="customId" value={customId} onInput={(e) => setCustomId(e.target.value)} />
      <Input placeholder="imageUrl" value={imageUrl} onInput={(e) => setImageUrl(e.target.value)} />
      <Input
        placeholder="description"
        value={description}
        onInput={(e) => setDescription(e.target.value)}
      />
      {customId && imageUrl && description ? (
        <Button onClick={() => addNewSlide()}>Добавить</Button>
      ) : undefined}
    </div>
  );
};

export default connect(null)(AddSlide);
