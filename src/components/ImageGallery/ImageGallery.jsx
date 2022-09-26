import PropTypes from 'prop-types';
import { Component } from 'react';
import { fetchImages } from 'js/api/api';
import { MainNotification } from 'components/MainNotification/MainNotification';
import { Loader } from './Loader/Loader';
import { ImageGalleryList } from './ImageGalleryList/ImageGalleryList';
import { PER_PAGE } from 'constants/constants';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';

export class ImageGallery extends Component {
  state = {
    galleryData: [],
    totalResults: 0,
    currentPage: 1,
    status: 'idle',
  };

  async componentDidUpdate(prevProps, prevState) {
    const searchValue = this.props.searchValue;
    const currentPage = this.state.currentPage;

    if (
      prevProps.searchValue === searchValue &&
      prevState.currentPage === currentPage
    )
      return;

    if (prevProps.searchValue !== searchValue)
      this.setState({ galleryData: [], totalResults: 0, currentPage: 1 });

    this.setState({ status: 'pending' });

    const fetchResult = await fetchImages(searchValue, currentPage);

    if (fetchResult === 'error') return this.setState({ status: 'rejected' });

    if (fetchResult.hits.length === 0)
      return this.setState({ status: 'empty' });

    this.setState({
      galleryData: [...this.state.galleryData, ...fetchResult.hits],
      totalResults: fetchResult.totalHits,
      status: 'resolved',
    });
  }

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  render() {
    const { galleryData, totalResults, currentPage, status } = this.state;

    if (status === 'idle')
      return <MainNotification notification="Let's find some images" />;

    if (status === 'rejected')
      return <MainNotification notification="Ooops, something went wrong" />;

    if (status === 'empty')
      return <MainNotification notification="No images were found" />;

    if (status === 'pending' && totalResults === 0) return <Loader />;

    if (status === 'resolved' || (status === 'pending' && totalResults > 0)) {
      const forwardHitsCount = totalResults - currentPage * PER_PAGE;

      return (
        <>
          <ImageGalleryList galleryData={galleryData} />
          {forwardHitsCount > 0 && (
            <LoadMoreButton
              title="Load more"
              onLoadMore={this.loadMore}
              status={status}
            />
          )}
        </>
      );
    }
  }
}

ImageGallery.propTypes = {
  searchValue: PropTypes.string.isRequired,
};
