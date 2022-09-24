import PropTypes from 'prop-types';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallURL, bigURL, alt }) => (
  <GalleryItem>
    <GalleryImage src={smallURL} alt={alt} />
  </GalleryItem>
);

ImageGalleryItem.propTypes = {
  smallURL: PropTypes.string.isRequired,
  bigURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
