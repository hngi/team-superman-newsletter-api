import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
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
  createdAt: {
    type: Number,
    required: true
  },
  updatedAt: {
    type: Number,
    required: true
  }
});

UserSchema.pre('save', async function preSaveOperation(next) {
  try {
    this.username = this.username.toLowerCase();
    this.email = this.email.toLowerCase();
    this.updatedAt = Date.now();
    this.password = this.isModified('password')
      ? await this.encryptPassword(this.password)
      : this.password;
    return next();
  } catch (err) {
    return next(err);
  }
});

UserSchema.methods = {
  authenticate: async function authenticateOperation(plainTextPassword) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(plainTextPassword, this.password, (err, hash) => {
        if (err) return reject(err);
        return resolve(hash);
      });
    });
  },
  encryptPassword: async function encryptOperation(plainTextPassword) {
    if (!plainTextPassword) return '';
    try {
      const salt = await new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, generatedSalt) => {
          if (err) return reject(err);
          return resolve(generatedSalt);
        });
      });
      return await new Promise((resolve, reject) => {
        bcrypt.hash(plainTextPassword, salt, (err, hash) => {
          if (err) return reject(err);
          return resolve(hash);
        });
      });
    } catch (err) {
      throw err;
    }
  },
  toJson: function toJsonOperation() {
    const userObject = this.toObject();
    userObject.createdAt = new Date(userObject.createdAt);
    userObject.updatedAt = new Date(userObject.updatedAt);
    delete userObject.password;
    return userObject;
  }
};

export default model('users', UserSchema);
