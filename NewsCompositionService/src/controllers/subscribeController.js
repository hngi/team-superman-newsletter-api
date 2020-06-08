/* eslint-disable class-methods-use-this */
import Response from '../utils/response';
import subscribeService from '../services/subscribeService';

/** Class that handles subscription */
class Subscribe {
  /**
   * Change email notification preferences
   * @param {object} req - request object
   * @param {object} res - response object
   * @param {object} next - next middleware
   * @returns {object} custom response
   */
  static async subscribe(req, res, next) {
    try {
      const { email } = req.user;
      // Action to be performed. Result is stored in 'data'
      const data = await subscribeService.updateUser({
        email,
        isSubscribed: true
      });

      return Response.customResponse(res, 200, 'Subscribed successfully', data);
    } catch (error) {
      next(error);
    }
  }
}

export default Subscribe;
