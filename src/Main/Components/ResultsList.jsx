import { h } from 'preact';
import Result from './Result.jsx';

export default ({ results, handleEmojiSelection, selectedEntry }) => (
  <ul className="mdc-list mdc-list--dense">
    {results
      .map(({ name, value }) => ({
        name: name.replace(/_/g, ' '),
        value
      }))
      .map((result, index) => (
        <Result
          isSelected={selectedEntry === index}
          result={result}
          handleEmojiSelection={handleEmojiSelection}
        />
      ))}
  </ul>
);
