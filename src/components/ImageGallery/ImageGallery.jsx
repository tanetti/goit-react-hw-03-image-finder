import PropTypes from 'prop-types';
import { Component } from 'react';
import { fetchImages } from 'js/api/api';
import { MainNotification } from 'components/MainNotification/MainNotification';
import { Loader } from './Loader/Loader';
import { ImageGalleryList } from './ImageGalleryList/ImageGalleryList';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import { PER_PAGE } from 'constants/constants';

export class ImageGallery extends Component {
  state = {
    galleryData: [],
    totalResults: 0,
    status: 'idle',
  };

  async componentDidUpdate(prevProps, _) {
    const { searchQuery, currentPage } = this.props;

    if (
      prevProps.searchQuery === searchQuery &&
      prevProps.currentPage === currentPage
    )
      return;

    this.setState({ status: 'pending' });

    const fetchResult = await fetchImages(searchQuery, currentPage);

    if (fetchResult === 'error') return this.setState({ status: 'rejected' });

    if (fetchResult.hits.length === 0)
      return this.setState({ status: 'empty' });

    this.setState({
      galleryData:
        currentPage === 1
          ? fetchResult.hits
          : [...this.state.galleryData, ...fetchResult.hits],
      totalResults: fetchResult.totalHits,
      status: 'resolved',
    });
  }

  render() {
    const { galleryData, totalResults, status } = this.state;
    const { onLoadMore, currentPage } = this.props;

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
              onLoadMore={onLoadMore}
              status={status}
            />
          )}
        </>
      );
    }
  }
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};
