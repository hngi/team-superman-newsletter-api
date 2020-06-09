/* eslint-disable implicit-arrow-linebreak */
import jwt from 'jsonwebtoken';
// import expressJwt from 'express-jwt';

import Users from '../models/Users';

const signToken = (data) =>
  jwt.sign(
    {
      // In English, this token expires in one day.
      exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
      data
    },
    process.env.JWTSecret || 'Superman-hngi7-secret'
  );

const respond = (user) => {
  const { _id } = user;
  const accessToken = signToken({ _id });
  return { ...user.toJson(), accessToken };
};

/** Class representing UserService */
class AuthService {
  /**
   * Creates a user
   * @param {object} param - user data to create with
   * @returns {object} new user and signed token
   */
  static async signup(param) {
    try {
      param = { ...param, createdAt: Date.now(), updatedAt: Date.now() };
      const user = await Users.create(param);
      return respond(user);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Signs in user
   * @param {object} param - signin credentials
   * @returns {object} user and signed token
   */
  static async signin(param) {
    try {
      const { username, password } = param;
      const $or = [{ username }, { email: username }];
      const user = await Users.findOne({ $or });
      if (!user || !(await user.authenticate(password))) {
        const error = new Error('invalid credentials');
        error.status = 401;
        error.name = 'Authorization error';
        throw error;
      }
      return respond(user);
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
