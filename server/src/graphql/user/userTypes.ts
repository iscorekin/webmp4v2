import { gql } from 'apollo-server';

export enum USER_ROLE  {
  USER = 'USER',
  MODERATOR = 'MODERATOR',
  ADMIN = 'ADMIN',
}

export interface IUser {
  id: string;
  name: string;
  role: USER_ROLE;
}

export type UserAuthType = {
  token: string;
}

const types = gql`
  type User {
    id: String
    name: String
    role: String
  }
  type UserAuth {
    token: String
  }
`;

export default types;