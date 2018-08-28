import { Component, h } from 'preact';
import 'material-components-web/dist/material-components-web.css';
import SearchBar from './Components/SearchBar.jsx';
import 'scss/style.scss';

export default class Main extends Component {
  handleSearchInput = e => {
    console.log('Testing: ', e.target.value);
  };

  render() {
    return (
      <div className="main-wrapper">
        <SearchBar
          handleSearchInput={this.handleSearchInput}
          placeholder="Search Emoji"
        />
      </div>
    );
  }
}
