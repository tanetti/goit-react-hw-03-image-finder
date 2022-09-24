import {
  StyledSearchButton,
  SearchIcon,
  HiddenLabel,
} from './SearchButton.styled';

export const SearchButton = () => (
  <StyledSearchButton type="submit">
    <HiddenLabel>Search</HiddenLabel>
    <SearchIcon />
  </StyledSearchButton>
);
