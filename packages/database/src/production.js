/* eslint no-console: 0 */

import mongoose from 'mongoose';

const connect = async database => {
  mongoose.Promise = global.Promise;

  await mongoose.connect(database, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

const disconnect = async () => {
  await mongoose.disconnect();
};

mongoose.connection
  .on('open', () => console.info('Connection opened'))
  .on('error', error => console.error(error))
  .on('close', () => console.warn('Connection closed'))
  .on('connected', () => console.info('Database connected'))
  .on('disconnected', () => console.warn('Database disconnected'));

export { connect, disconnect };
