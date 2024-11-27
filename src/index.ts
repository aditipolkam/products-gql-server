import { ApolloServer } from 'apollo-server';
import typeDefs from './schema/typeDefs';
import productResolver from './resolvers/productResolver';
import connectToDatabase from './config/db.config';

const server = new ApolloServer({ typeDefs, resolvers: productResolver });

server.listen().then(({ url }) => {
  connectToDatabase();
  console.log(`Server ready at ${url}`);
});
