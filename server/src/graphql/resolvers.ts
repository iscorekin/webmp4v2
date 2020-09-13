import userResolvers from './user/userResolvers';

export default {
  Query: {
    ...userResolvers.queries,
    hello: () => 'world!!'
  },
  Mutation: {
    ...userResolvers.mutations,
  },
};