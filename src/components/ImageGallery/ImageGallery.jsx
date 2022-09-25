import PropTypes from 'prop-types';
import { MainNotification } from 'components/MainNotification/MainNotification';
import { ImageList } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import { Loader } from './Loader/Loader';
import { Component } from 'react';

export class ImageGallery extends Component {
  state = {
    modalIdToShow: null,
  };

  componentDidMount() {
    const clickArea = document.querySelector('[data-action="gallery"]');

    clickArea.addEventListener('click', this.onImageClick);
  }

  componentWillUnmount() {
    const clickArea = document.querySelector('[data-action="gallery"]');

    clickArea.removeEventListener('click', this.onImageClick);
  }

  onImageClick = evt => {
    if (!evt.target?.dataset.id) return;

    this.setState({
      modalIdToShow: evt.target.dataset.id,
    });
  };

  onModalClose = () => {
    this.setState({
      modalIdToShow: null,
    });
  };

  render() {
    return (
      <>
        {this.props.galleryData.length === 0 && !this.props.isLoading ? (
          <MainNotification notification="No images was found" />
        ) : (
          <ImageList>
            {this.props.galleryData.map(item => (
              <ImageGalleryItem
                key={item.id}
                id={item.id}
                smallImage={item.webformatURL}
                largeImage={item.largeImageURL}
                tags={item.tags}
                modalIdToShow={this.state.modalIdToShow}
                onModalClose={this.onModalClose}
              />
            ))}
          </ImageList>
        )}
        {this.props.isLoading ? <Loader /> : null}
        {this.props.forwardHitsCount > 0 && !this.props.isLoading ? (
          <LoadMoreButton
            title="Load more"
            onLoadMore={this.props.onLoadMore}
          />
        ) : null}
      </>
    );
  }
}

ImageGallery.propTypes = {
  galleryData: PropTypes.array.isRequired,
  forwardHitsCount: PropTypes.number.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
