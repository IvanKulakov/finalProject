import { message } from 'antd';
import { favoritesOperations } from '../store/favorites';

export const favoriteDeleteBtnAction = ({ name, dispatch }) => {
  const artCollection = [...(JSON.parse(localStorage.getItem('favorites')) || '')];
  if (artCollection.find((item) => item.name === name)) {
    const collection = artCollection.filter((item) => {
      return item.name !== name;
    });
    localStorage.setItem('favorites', JSON.stringify(collection));
    message.success(`Товар ${name} удален из избранного! А жаль!`, 2);
  }
  dispatch(favoritesOperations.getFavorites());
};
