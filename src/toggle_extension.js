import {
  setSelectedItem,
  setCursorPosition,
  getSelectedItem,
  getCursorPosition
} from './cursor.js';

function getCaret(el) {
  if (el.selectionStart) {
    return el.selectionStart;
  } else if (document.selection) {
    el.focus();

    var r = document.selection.createRange();
    if (r == null) {
      return 0;
    }

    var re = el.createTextRange(),
      rc = re.duplicate();
    re.moveToBookmark(r.getBookmark());
    rc.setEndPoint('EndToStart', re);

    return rc.text.length;
  }
  return 0;
}

const oldRoot = document.querySelector('#emoji-lookup-root');
const currentSelection = document.activeElement;

setSelectedItem(currentSelection);
setCursorPosition(getCaret(currentSelection));

const left = getSelectedItem().value.substring(0, getCursorPosition());
const right = getSelectedItem().value.substring(
  getCursorPosition(),
  getSelectedItem().value.length
);
const mid = '🚓';

getSelectedItem().value = left + mid + right;

if (oldRoot) {
  oldRoot.remove();
} else {
  const newRoot = document.createElement('div');
  newRoot.id = 'emoji-lookup-root';

  // create iframe
  const iframe = document.createElement('iframe');
  iframe.id = 'emoji-lookup';
  iframe.src = chrome.runtime.getURL('popup.html');
  iframe.style = `z-index: 2147483647;
position: fixed;
left: 0;
top: 0;
width: 100%;
height: 100%;
border-width: 0;
pointer-events: all;
}`;
  iframe.frameBorder = 0;
  // mount to DOM
  newRoot.appendChild(iframe);
  document.documentElement.appendChild(newRoot);
}
