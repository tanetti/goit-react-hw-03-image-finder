import { GlobalStyles } from 'components/GlobalStyles';
import { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchValue: '',
    currentPage: 1,
  };

  submitSearch = evt => {
    evt.preventDefault();

    const currentQuery = evt.target.search.value.trim().toLowerCase();

    if (currentQuery === this.state.searchValue || !currentQuery) return;

    this.setState({
      searchValue: currentQuery,
      currentPage: 1,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  render() {
    const { searchValue, currentPage } = this.state;

    return (
      <>
        <GlobalStyles />
        <SearchBar onSubmit={this.submitSearch} />
        <main>
          <ImageGallery
            searchValue={searchValue}
            currentPage={currentPage}
            loadMore={this.loadMore}
          />
        </main>
      </>
    );
  }
}
