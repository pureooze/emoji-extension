import { Component, h } from 'preact';
import 'material-components-web/dist/material-components-web.css';
import SearchBar from './Components/SearchBar.jsx';

export default class Main extends Component {
  handleClick = () => {
    chrome.extension.getBackgroundPage().console.log('asdsadasdas');
  };

  render() {
    return (
      <div>
        <button type="button" id="changeColor" onClick={this.handleClick} />
        <SearchBar />
      </div>
    );
  }
}
