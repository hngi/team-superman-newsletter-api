const Subscription =require ('../models/Subscription');

/** Class representing SubscribersService */
class subscribeService {
  /**
   * Creates a new subscriber.
   * @param {object} subscriber - subscriber object.
   * @returns {object} - created subscriber object
   */
  static async createSubscriber(subscriber) {
    try {
      const data = await Subscription.create(subscriber);

      return data;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Updates a subscriber
   * @param {object} param - param to update
   * @param {object} data - new subscriber details
   * @returns {object} subscriber
   */
  static async updateSubscriber(param, data) {

    try {

      return await Subscription.findOneAndUpdate(param, data, { new: true });

    }
     catch (err) {
      throw err;
    }
  }

  /**
   * Gets all subscribers
   * @param {object} param - param to update
   * @returns {object} subscribers
   */
  static async getSubscribers(param) {
    try {
      const data = await Subscription.find(param);

      return data;
    }
     catch (err) {
      throw err;
    }
  }

  /**
   * Get a subscriber
   * @param {object} param - param to find
   * @returns {object} subscriber
   */
  static async getSubscriber(param) {
    try {
      const data = await Subscription.findOne(param);

      return data;
    }
     catch (error) {
      throw error;
    }
  }
}

module.exports= subscribeService;
