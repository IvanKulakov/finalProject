import React, { useState } from 'react';
import { Select } from 'antd';
import './Filter.scss';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import ProductsList from '../../components/ProductsList/ProductsList';

const Filter = () => {
  const [sortPrice, setSortPrice] = useState('');
  const { Option } = Select;
  const handleChange = (value) => {
    setSortPrice(value);
  };
  return (
    <div className="wrapper">
      <CategoriesList />
      <div className="filter-price__wrapper">
        <span className="title">Сортировка по цене:</span>
        <Select defaultValue="по умолчанию" className="filter__select" onChange={handleChange}>
          <Option value="-currentPrice">от дорогих</Option>
          <Option value="+currentPrice">от дешевых</Option>
          <Option value=" ">по умолчанию</Option>
        </Select>
      </div>
      <ProductsList sortPrice={sortPrice} />
    </div>
  );
};

export default Filter;
