import React from 'react';
import './CarouselItem.scss';
import { Popover } from 'antd';

const CarouselItem = ({ item }) => {
  const { customId, name, imageUrl, description } = item;
  const expandItem = `/shop/${customId}`;
  return (
    <a href={expandItem}>
      <div className="carousel-item__block">
        <div className="carousel-item__wrapper">
          <Popover title={name} content={description} trigger="hover">
            <img className="carousel-item__img" src={imageUrl} alt="hot offer" />
          </Popover>
        </div>
      </div>
    </a>
  );
};

export default CarouselItem;
