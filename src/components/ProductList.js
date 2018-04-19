import React from 'react';
import Product from './Product';

import { connect } from 'react-redux';

const ProductList = ({ products, addToCart }) => (
  <div>
    {products.map((product) => {
      return <Product key={product.id} product={product} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(ProductList);
