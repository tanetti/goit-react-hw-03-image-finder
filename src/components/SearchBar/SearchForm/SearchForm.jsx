import PropTypes from 'prop-types';
import { Component } from 'react';
import { StyledSearchForm } from './SearchForm.styled';
import { SearchButton } from '../SearchButton/SearchButton';
import { SearchInput } from '../SearchInput/SearchInput';

export class SearchForm extends Component {
  state = {
    searchQuery: '',
  };

  onInputChange = inputSearchQuery => {
    this.setState({ searchQuery: inputSearchQuery });
  };

  onFormSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state.searchQuery);
  };

  render() {
    return (
      <StyledSearchForm onSubmit={this.onFormSubmit} autoComplete="off">
        <SearchButton />
        <SearchInput onChange={this.onInputChange} />
      </StyledSearchForm>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
