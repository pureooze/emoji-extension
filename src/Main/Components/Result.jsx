import { h } from 'preact';

export default ({ result }) => (
  <li className="mdc-list-item">
    <span className="mdc-list-item__graphic emoji">{result.value}</span>
    {result.name}
  </li>
);
