import React from 'react';
import PopularProductsList from '../../components/PopularProductsList/PopularProductsList';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import Carousel from '../../components/Сarousel/Carousel';

const Main = () => (
  <div>
    <CategoriesList />
    <Carousel />
    <PopularProductsList />
  </div>
);

export default Main;
