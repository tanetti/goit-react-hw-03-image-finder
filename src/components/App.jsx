import { GlobalStyles } from 'components/GlobalStyles';
import { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchValue: '',
  };

  submitSearch = evt => {
    evt.preventDefault();

    const currentQuery = evt.target.search.value.trim().toLowerCase();

    if (currentQuery === this.state.searchValue || !currentQuery) return;

    this.setState({
      searchValue: currentQuery,
    });
  };

  render() {
    return (
      <>
        <GlobalStyles />
        <SearchBar onSubmit={this.submitSearch} />
        <main>
          <ImageGallery searchValue={this.state.searchValue} />
        </main>
      </>
    );
  }
}
