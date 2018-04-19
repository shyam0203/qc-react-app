import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import storeConfig from '../store/storeConfig';
import App from './App';

const initialState =  {
  categories: [],
  products: [],
  cart: [],
  showCart: false,
  activeCategoryId: undefined,
};

ReactDOM.render(
  <Provider store={storeConfig(initialState)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
