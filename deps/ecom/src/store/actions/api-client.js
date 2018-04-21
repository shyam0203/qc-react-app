import axios from 'axios';

export default (config) => ({
  getCategories() {
    return axios
      .post(
        `${config.apiHost}?query=
      {
        categories {
          id: _id
          ProductLine
          ProductSeries
        }
      }
    `,
      )
      .then((resp) => resp.data.data.categories);
  },
  getProducts(categoryId) {
    return axios
      .post(
        `${config.apiHost}?query=
      query GetProductsForCategory ($categoryId: String!) {
        category(_id: $categoryId) {
          products {
            id: _id
            CrossReference
            ItemDescription
            Price
            category {
              ProductLine
              ProductSeries
            }
          }
        }
      }
    &variables=${JSON.stringify({ categoryId })}`,
      )
      .then((resp) => resp.data.data.category.products);
  },
  getProductsForSearch(q) {
    return axios
      .post(
        `${config.apiHost}?query=
      query GetProductsForSearch ($q: String!) {
        products(q: $q) {
          id: _id
          CrossReference
          ItemDescription
          Price
          category {
            ProductLine
            ProductSeries
          }
        }
      }
    &variables=${JSON.stringify({ q })}`,
      )
      .then((resp) => resp.data.data.products);
  },
});
