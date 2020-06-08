import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  name: {
    required: true,
    type: String
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    required: true,
    unique: true,
    type: String
  },
  isSubscribed: {
    required: true,
    default: false,
    type: Boolean
  }
});

export default model('users', UserSchema);
