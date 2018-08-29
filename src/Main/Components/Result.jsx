import { h } from 'preact';

export default ({ result, handleEmojiSelection, isSelected }) => (
  <li
    className="mdc-list-item"
    style={isSelected ? 'background-color: black' : null}
    onClick={e => handleEmojiSelection(result.value)}
  >
    <span className="mdc-list-item__graphic emoji">{result.value}</span>
    {result.name}
  </li>
);
