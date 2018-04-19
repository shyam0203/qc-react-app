import apiClient from './api-client';

// export const defaultAction = () => {
//   return {
//     type: 'MyAction'
//   };
// };

// export const thunkAction = () => {
//   return (dispatch) => {
//   };
// };

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

export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  product,
});
