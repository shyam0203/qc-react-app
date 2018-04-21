import React from 'react';

import { connect } from 'react-redux';

import { searchAllProducts } from '../store/actions';

class Search extends React.Component {
  state = {
    q: '',
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchAllProducts(this.state.q);
  };
  handleInputChange = (event) => {
    const newValue = event.target.value
    this.setState(() => ({ q: newValue }))
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.q}
          onChange={this.handleInputChange}
          type="search"
          placeholder="Search all products..."
          required
        />
        <button type="sumbit">Go</button>
      </form>
    );
  }
}

export default connect(null, { searchAllProducts })(Search);
