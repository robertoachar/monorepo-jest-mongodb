import { connectTest, disconnectTest } from '@monorepo/database';
import User from '../User';

beforeAll(connectTest);
afterAll(disconnectTest);

describe('@Model Tests', () => {
  test('User Model', async () => {
    const count = await User.countDocuments();

    expect(count).toBe(0);
  });
});
