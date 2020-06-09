/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import Joi from '@hapi/joi';
import Format from './index';
import validator from '../utils/validator';

class lessonValidation {
  static validateData(req, res, next) {
    const format = Joi.object().keys(
      {
        email: Format.email,
        username: Format.username,
        password: Format.password,
        name: Format.name
      },
      {}
    );
    validator(format, req.body, res, next);
  }
}

export default lessonValidation;
