import { h } from 'preact';
import Result from './Result.jsx';

export default ({ results, firstVisibleIndex, maxSuggestions }) => (
  <ul>
    {results.slice(firstVisibleIndex, maxSuggestions).map(result => (
      <Result result={result} />
    ))}
  </ul>
);
