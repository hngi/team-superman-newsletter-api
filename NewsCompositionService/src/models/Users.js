import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
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
