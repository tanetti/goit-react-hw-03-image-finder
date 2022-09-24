import { StyledSearchForm } from './SearchForm.styled';
import { SearchButton } from '../SearchButton/SearchButton';
import { SearchInput } from '../SearchInput/SearchInput';

export const SearchForm = ({ onSubmit }) => (
  <StyledSearchForm onSubmit={onSubmit}>
    <SearchButton />
    <SearchInput />
  </StyledSearchForm>
);