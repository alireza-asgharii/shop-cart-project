const spliter = (value) => {
  const splited = value.split(" ");
  const newTitle = `${splited[0]} ${splited[1]}`;
  return newTitle;
};

const findItem = (state, id) => {
  const find = state.selectedItems.find((item) => item.id === id);
  return find;
};

const findCount = (state, id) => {
  const findIndex = state.selectedItems.findIndex((item) => item.id === id);
  if (findIndex === -1) {
    return false;
  } else {
    return state.selectedItems[findIndex].quantity;
  }
};

export { spliter, findItem, findCount };
