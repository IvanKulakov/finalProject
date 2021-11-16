import React, { useState } from 'react';
import { Image } from 'antd';
import ImageGrid from '../ImageGrid/ImageGrid';
import './ImageCard.scss';
import 'antd/dist/antd.css';

const ImageCard = ({ item }) => {
  const [image, setImage] = useState(item.imageUrls[0]);
  const imageGrid = item.imageUrls.map((img) => {
    return <ImageGrid images={img} name={item.name} setImage={setImage} key={item.id} />;
  });

  return (
    <div className="image-card__wrapper">
      <Image src={image} alt={item.name} className="image-card__main" />
      <div className="lite-image-pos">{imageGrid}</div>
    </div>
  );
};

export default ImageCard;
