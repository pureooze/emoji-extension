import { h } from 'preact';

export default ({ result }) => {
  return <li className="result">{result.value}</li>;
};
