import { h } from 'preact';
import emojione from 'emojione';

export default ({ result }) => <li>{emojione.unicodeToImage(result.char)}</li>;
