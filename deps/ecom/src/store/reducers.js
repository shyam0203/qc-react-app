const mainReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES':
      return {
        ...state,
        categories: action.categories,
      };
    case 'SHOW_PRODUCTS_FOR_CATEGORY':
      return {
        ...state,
        products: action.products,
        activeCategoryId: action.categoryId,
      };
    case 'ADD_TO_CART':
      if (!state.cart.find((cp) => cp.id === action.product.id)) {
        return {
          ...state,
          cart: [...state.cart, action.product],
          showCart: true,
        };
      }
    case 'SEARCH_PRODUCTS':
      return {
        ...state,
        products: action.productsForCurrentSearch,
        activeCategoryId: undefined,
      };
    default:
      return state;
  }
};

export default mainReducer;
