import React from 'react';
import { Card, Typography } from 'antd';
import 'antd/dist/antd.css';
import './Item.scss';
import { historyBtnAction } from '../../helpers/index';

const Item = ({ item }) => {
  const { name, currentPrice, imageUrls, itemNo } = item;
  const expandItem = `/shop/${itemNo}`;
  const { Title, Text } = Typography;
  return (
    <a href={expandItem} onClick={() => historyBtnAction({ item, itemNo })}>
      <Card hoverable cover={<img alt={name} className="product__img" src={imageUrls[0]} />}>
        <div className="item__text-wrapper">
          <Title className="item__name" level={5}>
            {name}
          </Title>
        </div>
        <Text className="item__price" strong>
          {currentPrice} ₴
        </Text>
      </Card>
    </a>
  );
};

export default Item;
