import { mongoose } from '@monorepo/database';

const UserSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const User = mongoose.model('User', UserSchema);

export default User;
