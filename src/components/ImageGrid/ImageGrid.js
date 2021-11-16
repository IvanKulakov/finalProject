import React from 'react';
import './ImageGrid.css';

const ImageGrid = ({ images, name, setImage }) => {
  const titleImage = () => {
    setImage(images);
  };

  return (
    <div>
      <img
        className="lite"
        src={images}
        alt={name}
        onClick={titleImage}
        width="100px"
        role="presentation"
      />
    </div>
  );
};

export default ImageGrid;
