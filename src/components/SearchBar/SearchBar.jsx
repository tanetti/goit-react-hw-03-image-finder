import PropTypes from 'prop-types';
import { StyledSearchBar } from './SearchBar.styled';
import { SearchForm } from './SearchForm/SearchForm';

export const SearchBar = ({ onSubmit }) => (
  <StyledSearchBar>
    <SearchForm onSubmit={onSubmit} />
  </StyledSearchBar>
);

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
