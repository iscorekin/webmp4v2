import mongoose from 'mongoose';
import {
  DB_CONNECTION,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
} from '../constants/configs/database';

const connectDatabase = async () => {
  mongoose.Promise = global.Promise;
  await mongoose.connect(DB_CONNECTION, {
    user: DB_USER,
    pass: DB_PASSWORD,
    dbName: DB_NAME,
    useNewUrlParser: true
  });
};

export default connectDatabase;
