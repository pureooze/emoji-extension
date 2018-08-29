import { h } from 'preact';
import Result from './Result.jsx';

export default ({ results, firstVisibleIndex, maxSuggestions }) => (
  <ul className="mdc-list mdc-list--dense">
    {results
      .slice(firstVisibleIndex, maxSuggestions)
      .map(({ name, value }) => ({
        name: name.replace(/_/g, ' '),
        value
      }))
      .map(result => (
        <Result result={result} />
      ))}
  </ul>
);
