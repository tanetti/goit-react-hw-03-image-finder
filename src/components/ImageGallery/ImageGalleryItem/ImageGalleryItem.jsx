import PropTypes from 'prop-types';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallImage, largeImage, tags }) => (
  <GalleryItem>
    <GalleryImage src={smallImage} alt={tags} data-fullimage={largeImage} />
  </GalleryItem>
);

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
