export const historyBtnAction = ({ item, itemNo }) => {
  const artCollection = [...(JSON.parse(localStorage.getItem('history')) || '')];
  if (!artCollection.find((itemData) => itemData.itemNo === itemNo)) {
    artCollection.push(item);
    if (artCollection.length > 5) artCollection.splice(0, 1);
    localStorage.setItem('history', JSON.stringify(artCollection));
  }
};
