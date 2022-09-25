import PropTypes from 'prop-types';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';

export const ImageGalleryItem = ({
  id,
  smallImage,
  largeImage,
  tags,
  modalIdToShow,
  onModalClose,
}) => (
  <GalleryItem>
    <GalleryImage src={smallImage} alt={tags} data-id={id} />
    {Number(modalIdToShow) === id ? (
      <Modal
        modalImageToShow={largeImage}
        modalImageAlt={tags}
        onClose={onModalClose}
      />
    ) : null}
  </GalleryItem>
);

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  modalIdToShow: PropTypes.any,
  onModalClose: PropTypes.func.isRequired,
};
