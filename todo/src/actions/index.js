export const addNewItem = (newItem) => {
  return {
    type: 'NEW_ITEM',
    payload: newItem,
  };
};

export const tickCompleted = (item) => {
  return {
    type: 'COMPLETED_TICK',
    payload: item.completed = !item.completed,
  };
};
