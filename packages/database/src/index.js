import mongoose from 'mongoose';
import {
  connect as connectProduction,
  disconnect as disconnectProduction
} from './production';
import { connect as connectTest, disconnect as disconnectTest } from './tests';

export {
  connectProduction,
  disconnectProduction,
  connectTest,
  disconnectTest,
  mongoose
};
