import { StyledInput } from './SerchInput.styled';

export const SearchInput = () => (
  <StyledInput
    type="text"
    autocomplete="off"
    autoFocus
    placeholder="Search images and photos"
    name="search"
  />
);
