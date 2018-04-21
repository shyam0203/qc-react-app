import React from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../store/actions';

class Product extends React.Component {
  handleAddToCart = () => this.props.addToCart(this.props.product);
  render() {
    return (
      <div style={{ margin: 12, border: 'thin solid #aaa', padding: 5 }}>
        {this.props.product.ItemDescription}
        <div style={{ fontWeight: 'bold' }}>${this.props.product.Price / 100}</div>
        <button onClick={this.handleAddToCart}>Add To Cart</button>
      </div>
    );
  }
}

export default connect(null, { addToCart })(Product);
