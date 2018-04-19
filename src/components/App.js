import React from 'react';

import CategoryList from './CategoryList';
import ProductList from './ProductList';
import Cart from './Cart';

import { connect } from 'react-redux';

import { fetchCategories, showProductsForCategory } from '../store/actions';

class App extends React.PureComponent {
  async componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
        <div id="container" style={{ display: 'flex' }}>
          <div id="leftSidebar" style={{ flex: 3, borderRight: 'thin solid #aaa', paddingRight: 10 }}>
            <CategoryList
              onCategoryClick={this.props.showProductsForCategory}
            />
          </div>
          <div id="main" style={{ flex: 5 }}>
            <ProductList />
          </div>
          <div
            id="rightSidebar"
            style={{
              flex: 2,
              display: this.props.showCart ? 'inline-block' : 'none',
            }}>
            The Cart
            <button onClick={() => this.setState({ showCart: false })}>=&gt;</button>
            <Cart />
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showCart: state.showCart,
  };
};

export default connect(mapStateToProps, { fetchCategories, showProductsForCategory })(App);
