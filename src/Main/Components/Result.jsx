import { h } from 'preact';

export default ({ result, handleEmojiSelection, isSelected }) => (
  <li
    className={`mdc-list-item ${isSelected ? 'selected-list-item' : ''}`}
    onClick={e => handleEmojiSelection(result.value)}
  >
    <span className="mdc-list-item__graphic emoji">{result.value}</span>
    {result.name}
  </li>
);
