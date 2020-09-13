import { ApolloServer } from 'apollo-server';
import resolvers from './graphql/resolvers';
import typeDefinitions from './graphql/typeDefinitions';
import connectDatabase from './database';

export default async () => {
  try {
    await connectDatabase();
    console.log('Database connected successfull!');
  }
  catch (error) {
    console.error(`Database connection failed: ${error.message}`);
    process.exit(1);
  }

  const server = new ApolloServer({
    resolvers,
    typeDefs: typeDefinitions
  });
  
  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
};