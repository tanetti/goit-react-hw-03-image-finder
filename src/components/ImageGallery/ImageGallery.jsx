import PropTypes from 'prop-types';
import { ImageList } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ galleryData }) => (
  <main>
    {galleryData?.hits.length > 0 ? (
      <ImageList>
        {galleryData.hits.map(item => (
          <ImageGalleryItem
            key={item.id}
            smallURL={item.webformatURL}
            bigURL={item.largeImageURL}
            alt={item.tags}
          />
        ))}
      </ImageList>
    ) : null}
  </main>
);

ImageGallery.propTypes = {
  galleryData: PropTypes.shape({
    hits: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    totalHits: PropTypes.number.isRequired,
  }),
};
