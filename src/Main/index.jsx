import { Component, h } from 'preact';
import SearchBar from './Components/SearchBar.jsx';
import ResultsList from './Components/ResultsList.jsx';
import getFilteredSuggestions from './emojiSearch.js';
import 'material-components-web/dist/material-components-web.css';
import 'scss/style.scss';

export default class Main extends Component {
  state = {
    results: [],
    searchString: ''
  };

  handleSearchInput = async e => {
    const results = await getFilteredSuggestions(e.target.value);
    this.setState({
      results,
      searchString: e.target.value
    });
  };

  render() {
    const { results, searchString } = this.state;
    return (
      <div className="main-wrapper">
        <SearchBar
          handleSearchInput={this.handleSearchInput}
          placeholder="Search Emoji"
          searchString={searchString}
        />
        {results.length >= 0 ? <ResultsList results={results} /> : null}
      </div>
    );
  }
}
