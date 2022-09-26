import PropTypes from 'prop-types';
import { Component } from 'react';
import { StyledInput } from './SerchInput.styled';

export class SearchInput extends Component {
  state = {
    searchQuery: '',
  };

  componentDidUpdate(_, prevState) {
    if (prevState.searchQuery === this.state.searchQuery) return;

    this.props.onChange(this.state.searchQuery);
  }

  onQueryChange = ({ target }) => {
    this.setState({ searchQuery: target.value });
  };

  render() {
    return (
      <StyledInput
        type="text"
        autoFocus
        placeholder="Search images and photos"
        value={this.state.searchQuery}
        onChange={this.onQueryChange}
      />
    );
  }
}

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};
