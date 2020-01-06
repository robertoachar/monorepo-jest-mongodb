import { connect, disconnect } from '../test/database';
import { User } from '../src';

beforeAll(connect);
afterAll(disconnect);

describe('Model Tests', () => {
  test('User Model', async () => {
    const count = await User.countDocuments();

    expect(count).toBe(0);
  });
});
