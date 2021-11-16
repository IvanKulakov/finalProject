import { message } from 'antd';
import { cartOperations } from '../store/cart/indexCart';

export const cartClearAndTelegram = ({ customer, dispatch, coast }) => {
  const token = '2103225611:AAHw6eCm39TnDAl6FJBxHyR04l6-LGYFf5A';
  const chatId = '217910734';
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=Имя ${customer.firstName}, телефон ${customer.telephone}, заказ ${coast}`;
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  xhttp.send();
  dispatch(cartOperations.deleteAllCart());
  message.success(
    `${customer.firstName} спасибо за заказ! Мы свяжемся с Вами в ближайшее время!`,
    3
  );
};
