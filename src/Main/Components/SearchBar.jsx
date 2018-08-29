import { Component, h } from 'preact';

export default class SearchBar extends Component {
  render() {
    const { placeholder, searchString, handleSearchInput } = this.props;

    return (
      <section className="mdc-text-field mdc-text-field--dense">
        <input
          id="search-bar"
          name="search-bar"
          className="mdc-text-field__input"
          type="text"
          aria-label={placeholder}
          placeholder={placeholder}
          onKeyDown={handleSearchInput}
          value={searchString}
          autoFocus
          ref={input => input && input.focus()}
        />
      </section>
    );
  }
}
