import PropTypes from 'prop-types';
import { ButtonContainer, StyledButton } from './LoadMoreButton.styled';

export const LoadMoreButton = ({ title, onLoadMore }) => (
  <ButtonContainer>
    <StyledButton onClick={onLoadMore}>{title}</StyledButton>
  </ButtonContainer>
);

LoadMoreButton.propTypes = {
  title: PropTypes.string.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};
