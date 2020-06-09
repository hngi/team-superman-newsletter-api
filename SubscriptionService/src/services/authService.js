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

/** Class representing UserService */
class AuthService {
  /**
   * Updates a user
   * @param {object} param - user data to create with
   * @returns {object} new user and signed token
   */
  static async signup(param) {
    try {
      param = { ...param, createdAt: Date.now(), updatedAt: Date.now() };
      const user = await Users.create(param);
      const { _id } = user;
      const accessToken = signToken({ _id });
      return { ...user.toJson(), accessToken };
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
