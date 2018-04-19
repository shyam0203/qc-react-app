import React from 'react';

import { connect } from 'react-redux';

class Cart extends React.PureComponent {
  cartTotal = () =>
    this.props.products
      .reduce((acc, curr) => acc + curr.Price, 0) / 100;

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.props.products.map((product) => (
            <li key={product.id}>
              {product.CrossReference} - ${product.Price / 100}
            </li>
          ))}
        </ul>
        <div>Total: ${this.cartTotal()}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
