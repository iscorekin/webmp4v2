import userResolvers from './user/userResolvers';

export default {
  Query: {
    ...userResolvers.queries,
  },
  Mutation: {
    ...userResolvers.mutations,
  },
};