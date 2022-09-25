import PropTypes from 'prop-types';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    shouldModalShown: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      shouldModalShown: !prevState.shouldModalShown,
    }));
  };

  render() {
    return (
      <GalleryItem>
        <GalleryImage
          src={this.props.smallImage}
          alt={this.props.tags}
          onClick={this.toggleModal}
        />
        {this.state.shouldModalShown ? (
          <Modal
            modalImageToShow={this.props.largeImage}
            modalImageAlt={this.props.tags}
            onClose={this.toggleModal}
          />
        ) : null}
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
