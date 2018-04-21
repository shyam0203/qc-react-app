import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { Provider } from 'react-redux';

// import { qcEcom, App, storeConfig } from 'qc-ecom';
//
// import config from '../server/config';
//
// qcEcom.setConfig(config);

// import apiClient from '../store/actions/api-client';

const serverRender = async (req) => {
  // let products = [];
  const activeCategoryId = req.params.categoryId;
  // const categories =  await apiClient.getCategories();
  //
  // if (activeCategoryId) {
  //   products = await apiClient.getProducts(activeCategoryId);
  // }

  const initialData =  {
    categories: [],
    products: [],
    cart: [],
    showCart: false,
    activeCategoryId,
  };

  const initialMarkup = '...';

  return {
    initialMarkup,
    initialData,
  };
};

export default serverRender;
