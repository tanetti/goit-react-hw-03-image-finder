import PropTypes from 'prop-types';
import { ImageList } from './ImageGalleryList.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGalleryList = ({ galleryData }) => (
  <ImageList>
    {galleryData.map(item => (
      <ImageGalleryItem
        key={item.id}
        smallImage={item.webformatURL}
        largeImage={item.largeImageURL}
        tags={item.tags}
      />
    ))}
  </ImageList>
);

ImageGalleryList.propTypes = {
  galleryData: PropTypes.array.isRequired,
};
