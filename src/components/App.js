import React from 'react';

import CategoryList from './CategoryList';
import ProductList from './ProductList';
import Cart from './Cart';

import apiClient from '../store/actions/api-client';

import { Provider } from '../store/stateCtx';

class App extends React.PureComponent {
  state = {
    categories: [],
    products: [],
    cart: [],
    showCart: false,
    activeCategoryId: undefined,
  };
  async componentDidMount() {
    const categories = await apiClient.getCategories();
    this.setState({ categories });
  }

  productAlreadyInCart = (prevState, product) => prevState.cart.find((cp) => cp.id === product.id);

  addToCart = (product) => {
    this.setState((prevState) => {
      if (this.productAlreadyInCart(prevState, product)) {
        return;
      }
      return {
        cart: [...prevState.cart, product],
        showCart: true,
      };
    });
  };
  showProductsForCategory = async (categoryId) => {
    const products = await apiClient.getProducts(categoryId);
    this.setState({ products, activeCategoryId: categoryId });
  };
  render() {
    return (
      <Provider value={this.state}>
        <div id="container" style={{ display: 'flex' }}>
          <div id="leftSidebar" style={{ flex: 3, borderRight: 'thin solid #aaa', paddingRight: 10 }}>
            {/*<CategoryList
              activeCategoryId={this.state.activeCategoryId}
              onCategoryClick={this.showProductsForCategory}
            />*/}
          </div>
          <div id="main" style={{ flex: 5 }}>
            <ProductList products={this.state.products} addToCart={this.addToCart} />
          </div>
          <div
            id="rightSidebar"
            style={{
              flex: 2,
              display: this.state.showCart ? 'inline-block' : 'none',
            }}>
            The Cart
            <button onClick={() => this.setState({ showCart: false })}>=&gt;</button>
            <Cart products={this.state.cart} />
          </div>
        </div>

      </Provider>
    );
  }
}

export default App;
