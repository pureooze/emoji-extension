let selectedItem = null;
let cursorPosition = null;

const cursorInfo = {
  setSelectedItem: sel => {
    selectedItem = sel;
  },
  setCursorPosition: cPos => {
    cursorPosition = cPos;
  },
  getSelectedItem: () => selectedItem,
  getCursorPosition: () => cursorPosition
};

export default cursorInfo;
