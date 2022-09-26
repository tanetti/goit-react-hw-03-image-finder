import { GlobalStyles } from 'components/GlobalStyles';
import { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
  };

  onSearchSubmit = formSearchQuery => {
    const formatedSearchQuery = formSearchQuery.trim().toLowerCase();

    if (!formatedSearchQuery || this.state.searchQuery === formatedSearchQuery)
      return;

    this.setState({
      searchQuery: formatedSearchQuery,
      currentPage: 1,
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  render() {
    const { searchQuery, currentPage } = this.state;

    return (
      <>
        <GlobalStyles />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <main>
          <ImageGallery
            searchQuery={searchQuery}
            currentPage={currentPage}
            onLoadMore={this.onLoadMore}
          />
        </main>
      </>
    );
  }
}
