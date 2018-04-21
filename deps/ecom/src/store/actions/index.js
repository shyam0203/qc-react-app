import getApiClient from './api-client';
import qcEcom from '../../../config';

const apiClient = getApiClient(qcEcom.config);

export const fetchCategories = () => {
  return async (dispatch) => {
    const categories = await apiClient.getCategories();
    dispatch({ type: 'FETCH_CATEGORIES', categories });
  };
};

export const showProductsForCategory = (categoryId) => {
  return async (dispatch) => {
    const products = await apiClient.getProducts(categoryId);
    dispatch({
      type: 'SHOW_PRODUCTS_FOR_CATEGORY',
      products,
      categoryId,
    });
  };
};

export const searchAllProducts = (q) => {
  return async (dispatch) => {
    const productsForCurrentSearch = await apiClient.getProductsForSearch(q);
    dispatch({
      type: 'SEARCH_PRODUCTS',
      productsForCurrentSearch,
    });
  };
};

export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  product,
});
