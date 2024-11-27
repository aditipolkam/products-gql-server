import Product from '../models/product';

const resolvers = {
  Query: {
    getProducts: async () => await Product.find(),
    getProductByCategory: async (_: unknown, args: { category: string }) => {
      const { category } = args;
      return await Product.find({ category });
    },
    getProductById: async (_: unknown, args: { absoluteUrl: string }) => {
      const { absoluteUrl } = args;
      return await Product.findOne({ absoluteUrl });
    },
  },
};

export default resolvers;
