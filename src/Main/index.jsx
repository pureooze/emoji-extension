import 'lib/browser_polyfill.js';
import { Component, h } from 'preact';
import SearchBar from './Components/SearchBar.jsx';
import ResultsList from './Components/ResultsList.jsx';
import getFilteredSuggestions from './emojiSearch.js';
import 'scss/style.scss';

export default class Main extends Component {
  state = {
    results: [],
    searchString: '',
    selectedEntry: 0
  };

  handleSearchInput = async e => {
    const { selectedEntry, results } = this.state;

    if (e.key === 'ArrowUp' && selectedEntry > 0) {
      e.preventDefault();
      this.setState({
        selectedEntry: selectedEntry - 1
      });
    } else if (e.key === 'ArrowDown' && selectedEntry < 4) {
      this.setState({
        selectedEntry: selectedEntry + 1
      });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      this.handleEmojiSelection(results[selectedEntry].value);
      browser.runtime.sendMessage({
        key: 'closeExtension'
      });
    } else {
      const filteredResults = await getFilteredSuggestions(e.target.value);
      this.setState({
        results: filteredResults,
        searchString: e.target.value
      });
    }
  };

  handleEmojiSelection = async e => {
    const input = document.createElement('input');
    input.value = e;
    document.body.appendChild(input);
    input.select();
    const result = document.execCommand('copy');
    input.blur();
    document.body.removeChild(input);
  };

  render() {
    const { results, searchString, selectedEntry } = this.state;
    return (
      <div className="main-wrapper">
        <SearchBar
          handleSearchInput={this.handleSearchInput}
          placeholder="Search Emoji"
          searchString={searchString}
        />
        {results.length >= 0 ? (
          <ResultsList
            selectedEntry={selectedEntry}
            results={results}
            handleEmojiSelection={this.handleEmojiSelection}
          />
        ) : null}
      </div>
    );
  }
}
