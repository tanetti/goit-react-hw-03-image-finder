import PropTypes from 'prop-types';
import { MainNotification } from 'components/MainNotification/MainNotification';
import { ImageList } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';
import { Loader } from './Loader/Loader';

export const ImageGallery = ({
  galleryData,
  forwardHitsCount,
  onLoadMore,
  isLoading,
}) => (
  <>
    {galleryData.length === 0 && !isLoading ? (
      <MainNotification notification="No images was found" />
    ) : (
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
    )}
    {isLoading ? <Loader /> : null}
    {forwardHitsCount > 0 && !isLoading ? (
      <LoadMoreButton title="Load more" onLoadMore={onLoadMore} />
    ) : null}
  </>
);

ImageGallery.propTypes = {
  galleryData: PropTypes.array.isRequired,
  forwardHitsCount: PropTypes.number.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
