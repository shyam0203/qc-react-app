import React from 'react';
import Product from './Product';

import connect from '../store/connect';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        {this.props.state.products.map((product) => {
          return <Product key={product.id} product={product} addToCart={this.props.addToCart} />;
        })}
      </div>
    );
  }
}

export default connect(ProductList);
