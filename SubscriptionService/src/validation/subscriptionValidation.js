/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
const Joi =require ('@hapi/joi');
const Format =require ('./index');
const validator =require ('../utils/validator');

class subscriptionValidation {
  static validateData(req, res, next) {
    const format = Joi.object().keys(
      {
        email: Format.email
      },
      {}
    );
    validator(format, req.body, res, next);
  }
}

module.exports= subscriptionValidation;
