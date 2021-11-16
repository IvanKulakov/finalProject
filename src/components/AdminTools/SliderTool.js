import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { slidesOperations } from '../../store/slides';
import Loader from '../Loader/Loader';
import SliderRender from './SliderRender';
import AddSlide from './AddSlide';
import './adminTools.scss';

const SliderTool = ({ dispatch, isLoading, slides, setAdminTool }) => {
  useEffect(() => {
    dispatch(slidesOperations.getSlides());
  }, []);
  if (isLoading) return <Loader />;
  console.log(slides);
  const allSlides = slides.map((item) => {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
    return <SliderRender item={item} key={item._id} />;
  });

  return (
    <div>
      <h2>Слайдер</h2>
      <Button onClick={() => setAdminTool(<AddSlide />)}>Добавить слайд</Button>
      <div className="card-block-render">{allSlides}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    slides: state.slides.data,
    isLoading: state.slides.isLoading,
  };
};

export default connect(mapStateToProps)(SliderTool);
