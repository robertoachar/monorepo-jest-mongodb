// import { connect, disconnect } from '../test/database';

import database from '@monorepo/test';
import { User } from '../src';

// beforeAll(connect);
// afterAll(disconnect);

beforeAll(database.connect);
afterAll(database.disconnect);

describe('Model Tests', () => {
  test('User Model', async () => {
    const count = await User.countDocuments();

    expect(count).toBe(0);
  });
});
