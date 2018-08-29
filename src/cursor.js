let selectedItem = null;
let cursorPosition = null;

export const setSelectedItem = el => {
  selectedItem = el;
};

export const setCursorPosition = pos => {
  console.log('123: ', pos);
  cursorPosition = pos;
};

export const getSelectedItem = () => selectedItem;

export const getCursorPosition = () => cursorPosition;
