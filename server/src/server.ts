import { ApolloServer } from 'apollo-server';
import resolvers from './graphql/resolvers';
import typeDefinitions from './graphql/typeDefinitions';

const server = new ApolloServer({
  resolvers,
  typeDefs: typeDefinitions,
});

export default () =>
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
