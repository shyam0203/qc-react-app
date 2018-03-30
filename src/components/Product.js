import React from 'react';

class Product extends React.Component {
  render() {
    return (
      <div style={{ margin: 12, border: 'thin solid #aaa', padding: 5 }}>
        {this.props.product.ItemDescription}
        <div style={{ fontWeight: 'bold' }}>
          ${this.props.product.Price / 100}
        </div>
        <button onClick={this.props.addToCart}>Add To Cart</button>
      </div>
    );
  }
}

export default Product;
