import React from 'react';
import { Spin } from 'antd';
import './Loader.scss';

const Loader = () => {
  return (
    <div className="loader__wrapper wrapper">
      <p className="loader__title">Пожалуйста, подождите, идет загрузка</p>
      <Spin />
    </div>
  );
};

export default Loader;
