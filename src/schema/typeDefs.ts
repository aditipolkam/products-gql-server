import { gql } from 'apollo-server';

const typeDefs = gql`
  type Product {
    productName: String
    brand: String
    price: Float
    discountPrice: Float
    imageUrl: String
    quantity: String
    category: String
    subCategory: String
    absoluteUrl: String
  }

  type Query {
    getProducts: [Product]
    getProductByCategory(category: String!): [Product]
    getProductById(absoluteUrl: String!): Product
  }
`;

export default typeDefs;
