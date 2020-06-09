/* eslint-disable class-methods-use-this */
import Response from '../utils/response';
import authService from '../services/authService';

/** Class that handles subscription */
class Authenticate {
  /**
   * Signs up user to service
   * @param {object} req - request object
   * @param {object} res - response object
   * @param {object} next - next middleware
   * @returns {object} custom response
   */
  static async signup(req, res, next) {
    try {
      // Action to be performed. Result is stored in 'data'
      const data = await authService.signup(req.body);

      return Response.customResponse(res, 200, 'Created successfully', data);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Signs in user
   * @param {object} req - request object
   * @param {object} res - response object
   * @param {object} next - next middleware
   * @returns {object} custom response
   */
  static async signin(req, res, next) {
    try {
      // Action to be performed. Result is stored in 'data'
      const data = await authService.signin(req.body);

      return Response.customResponse(res, 200, 'Signed in successfully', data);
    } catch (error) {
      next(error);
    }
  }
}

export default Authenticate;
