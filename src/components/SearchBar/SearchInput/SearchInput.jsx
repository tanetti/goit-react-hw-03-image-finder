import { Component } from 'react';
import { StyledInput } from './SerchInput.styled';

export class SearchInput extends Component {
  state = {
    searchQuery: '',
  };

  onQueryChange = ({ target }) => {
    this.setState({ searchQuery: target.value });
  };

  render() {
    return (
      <StyledInput
        type="text"
        autoFocus
        placeholder="Search images and photos"
        name="search"
        value={this.state.searchQuery}
        onChange={this.onQueryChange}
      />
    );
  }
}
