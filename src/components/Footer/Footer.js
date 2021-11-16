import React from 'react';
import './Footer.scss';
import 'antd/dist/antd.css';
import { Typography, Space } from 'antd';
import fb from '../../static/icons/image17.png';
import twit from '../../static/icons/image19.png';
import vk from '../../static/icons/image20.png';
import insta from '../../static/icons/insta.png';
import ss from '../../static/icons/image21.png';
import paycard from '../../static/icons/image52.png';

const { Title, Link } = Typography;

const Footer = () => {
  return (
    <div className="footer__background">
      <div className="footer__wrapper wrapper">
        <div className="footer__section">
          <Space className="footer__block" direction="vertical">
            <Title className="footer__title">Партнерам</Title>
            <Link className="footer__subtitle" href="/userinfo">
              Сотрудничество с нами
            </Link>
            <Link className="footer__subtitle" href="$" target="_blank">
              Корпоративные заказы
            </Link>
          </Space>
          <Space className="footer__block" direction="vertical">
            <Title className="footer__title">Помощь</Title>
            <Link className="footer__subtitle" href="$" target="_blank">
              Доставка и оплата
            </Link>
            <Link className="footer__subtitle" href="$" target="_blank">
              Обмен или возврат
            </Link>
          </Space>
        </div>
        <div className="footer__section">
          <div className="footer__block">
            <Title className="footer__title">Мы в соцсетях</Title>
            <div className="footer__icons">
              <img className="footer__icon" src={fb} alt="fb" width="33px" />
              <img className="footer__icon" src={twit} alt="twit" width="33px" />
              <img className="footer__icon" src={vk} alt="vk" width="33px" />
              <img className="footer__icon" src={insta} alt="insta" width="33px" />
              <img className="footer__icon" src={ss} alt="ss" width="33px" />
            </div>
          </div>
          <div className="footer__block">
            <Title className="footer__title">Способы оплаты</Title>
            <img src={paycard} alt="paycard" className="paycard-img" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
