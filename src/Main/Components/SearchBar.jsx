import { Component, h } from 'preact';

export default class SearchBar extends Component {
  render() {
    const { placeholder, searchString, handleSearchInput } = this.props;

    return (
      <section className="mdc-text-field text-field mdc-text-field--dense mdc-text-field--with-leading-icon search-field-wrapper">
        <i className="material-icons mdc-text-field__icon">search</i>
        <input
          id="search-bar"
          className="mdc-text-field__input search-field-input"
          type="text"
          placeholder={placeholder}
          aria-label={placeholder}
          onInput={handleSearchInput}
          value={searchString}
          ref={input => input && input.focus()}
        />
      </section>
    );
  }
}
