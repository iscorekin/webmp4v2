import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';
import userTypes from './user/userTypes';

const queryTypes = gql`
  type Query {
    hello: String
    user: User
  }
  type Mutation {
    login(id: String): String
  }
`;

const typeDefinitions: DocumentNode[] = [queryTypes, userTypes];

export default typeDefinitions;
