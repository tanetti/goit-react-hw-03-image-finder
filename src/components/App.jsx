import { GlobalStyles } from 'components/GlobalStyles';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from 'js/api/api';
import { MainNotification } from './MainNotification/MainNotification';
import { PER_PAGE } from 'constants/constants';

export class App extends Component {
  state = {
    searchValue: null,
    currentPage: 1,

    searchData: [],
    totalHits: 0,

    isLoading: false,

    error: false,
  };

  async componentDidUpdate() {
    const fetchResult = await fetchImages(
      this.state.searchValue,
      this.state.currentPage
    );

    if (this.state.isLoading) {
      if (fetchResult === 'error') {
        this.setState({ error: true, isLoading: false, searchValue: null });
        return;
      }

      this.setState(prevState => ({
        currentPage: prevState.currentPage + 1,

        searchData: [...prevState.searchData, ...fetchResult.hits],
        totalHits: fetchResult.totalHits,

        isLoading: false,
      }));
    }
  }

  submitSearch = evt => {
    evt.preventDefault();

    const currentQuery = evt.target.search.value;

    if (currentQuery === this.state.searchValue || !currentQuery) return;

    this.setState({
      searchValue: currentQuery,
      currentPage: 1,

      searchData: [],
      totalHits: 0,

      isLoading: true,

      error: false,
    });
  };

  loadMore = () => {
    this.setState({
      isLoading: true,
    });
  };

  render() {
    const {
      searchValue,
      currentPage,
      searchData,
      totalHits,
      isLoading,
      error,
    } = this.state;

    const forwardHitsCount =
      Number(totalHits) - (Number(currentPage) - 1) * PER_PAGE;

    return (
      <>
        <GlobalStyles />
        <SearchBar onSubmit={this.submitSearch} />
        <main>
          {error ? (
            <MainNotification notification="Ooops, something went wrong" />
          ) : searchData.length === 0 && !searchValue ? (
            <MainNotification notification="Let's find some images" />
          ) : (
            <ImageGallery
              galleryData={searchData}
              forwardHitsCount={forwardHitsCount}
              onLoadMore={this.loadMore}
              isLoading={isLoading}
            />
          )}
        </main>
      </>
    );
  }
}
