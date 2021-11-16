import { message } from 'antd';
import { favoritesOperations } from '../store/favorites';

export const favoriteBtnAction = ({ itemData, itemNo, setBtnText, favorites, dispatch }) => {
  const artCollection = [...(JSON.parse(localStorage.getItem('favorites')) || '')];
  if (artCollection.find((item) => item.itemNo === itemNo)) {
    const collection = artCollection.filter((item) => {
      return item.itemNo !== itemData.itemNo;
    });
    localStorage.setItem('favorites', JSON.stringify(collection));
    message.success('Товар удален из избранного! А жаль!', 2);
  }
  if (!artCollection.find((item) => item.itemNo === itemNo)) {
    artCollection.push(itemData);
    localStorage.setItem('favorites', JSON.stringify(artCollection));
    message.success('Товар добавлен в избранное. Спасибо!', 2);
  }
  setBtnText(
    favorites.find((item) => item.itemNo === itemNo)
      ? 'Удалить из избранного'
      : 'Добавить в избранное'
  );
  dispatch(favoritesOperations.getFavorites());
};
