/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './Carousel.scss';
import CarouselItem from '../CarouselItem/CarouselItem';
import { slidesOperations } from '../../store/slides';

const Carousel = ({ slides, dispatch }) => {
  useEffect(() => {
    dispatch(slidesOperations.getSlides());
  }, [dispatch]);
  const slidesItems = slides.map((item) => {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
    return <CarouselItem item={item} key={item._id} />;
  });
  const settings = {
    customPaging: (i) => {
      const item = slides[i];
      const img = item.imageUrl;
      return (
        <div>
          <img
            src={img}
            className="carousel__paging"
            alt="hot offer"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="carousel__wrapper wrapper">
      <h2 className="page__title">Акционные товары</h2>
      <Slider {...settings}> {slidesItems} </Slider>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    slides: state.slides.data,
  };
};

export default connect(mapStateToProps)(Carousel);
