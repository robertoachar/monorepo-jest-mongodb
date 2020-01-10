import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let database = null;

const connect = async () => {
  console.log('Testing database...');
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

mongoose.connection
  .on('open', () => console.info('Connection opened'))
  .on('error', error => console.error(error))
  .on('close', () => console.warn('Connection closed'))
  .on('connected', () => console.info('Database connected'))
  .on('disconnected', () => console.warn('Database disconnected'));

export { connect, disconnect };
