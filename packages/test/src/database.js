import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let database = null;

const connect = async () => {
  database = new MongoMemoryServer();

  const mongoUri = await database.getUri();

  mongoose.Promise = global.Promise;
  await mongoose.connect(mongoUri, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

const disconnect = async () => {
  await mongoose.disconnect();
  await database.stop();
};

export { connect, disconnect };
