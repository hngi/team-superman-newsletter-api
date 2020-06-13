/* eslint-disable require-jsdoc */
/* eslint-disable class-methods-use-this */
const Response =require ('../utils/response');
const subscribeService =require ('../services/subscribeService');

/** Class that handles subscription */
class Subscribe {
  /**
   * Subscribe a user for emails
   * @param {object} req - request object
   * @param {object} res - response object
   * @param {object} next - next middleware
   * @returns {object} custom response
   */
  static async subscribe(req, res, next) {
    try {
      let data = {};
      const user = req.body;
      user.status = true;

      // Check if user exists
      const userExist = await subscribeService.getSubscriber({
        email: user.email
      });
      if (userExist) {
        if (userExist.status === true) {
          return Response.conflictError(res, 'You are already subscribed');
        }
        // Update status if user exists or create a new user
        if (userExist.status === false) {
          data = await subscribeService.updateSubscriber(
            { email: user.email },
            { status: true }
          );
        }
      }

      if (!userExist) {
        data = await subscribeService.createSubscriber(user);
      }

      return Response.customResponse(res, 200, 'Subscribed successfully', data);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Unsubscribe a user for emails
   * @param {object} req - request object
   * @param {object} res - response object
   * @param {object} next - next middleware
   * @returns {object} custom response
   */
  static async unsubscribe(req, res, next) {
    try {
      const { email } = req.body;

      // Check if user exists
      const userExist = await subscribeService.getSubscribers({
        email
      });
      if (!userExist) {
        return Response.notFoundError(res, 'Subscriber not found');
      }

      const data = await subscribeService.updateSubscriber(
        { email },
        { status: false }
      );

      return Response.customResponse(
        res,
        200,
        'Unsubscribed successfully',
        data
      );
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get subscribers with status of true
   * @param {object} req - request object
   * @param {object} res - response object
   * @param {object} next - next middleware
   * @returns {object} custom response
   */
  static async getSubscribers(req, res, next) {
    try {
      const data = await subscribeService.getSubscribers({
        status: true
      });

      return Response.customResponse(res, 200, 'All active subscribers:', data);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Get all subscribers
   * @param {object} req - request object
   * @param {object} res - response object
   * @param {object} next - next middleware
   * @returns {object} custom response
   */
  static async getAllSubscribers(req, res, next) {
    try {
      const data = await subscribeService.getSubscribers({});

      return Response.customResponse(res, 200, 'All subscribers:', data);
    } catch (error) {
      next(error);
    }
  }
}

module.exports= Subscribe;
