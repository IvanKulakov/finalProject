import React from 'react';
import { Select } from 'antd';

const CategoriesSelect = ({ name }) => {
  const { Option } = Select;
  return <Option value={name}>{name}</Option>;
};

export default CategoriesSelect;
