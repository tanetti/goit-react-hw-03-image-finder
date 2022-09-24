import { GlobalStyles } from 'components/GlobalStyles';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from 'js/api/api';

export class App extends Component {
  state = {
    searchValue: null,
    currentPage: 1,

    searchData: null,
  };

  searchImages = async evt => {
    evt.preventDefault();

    const currentValue = evt.target.search.value;

    if (currentValue === this.state.searchValue || !currentValue) return;

    this.setState({
      searchValue: currentValue,
      currentPage: 2,
      searchData: await fetchImages(currentValue, this.state.currentPage),
    });
  };

  render() {
    return (
      <>
        <GlobalStyles />
        <SearchBar onSubmit={this.searchImages} />
        <ImageGallery galleryData={this.state.searchData} />
      </>
    );
  }
}
