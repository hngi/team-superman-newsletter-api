/* eslint-disable no-unused-expressions */
import express from 'express';

import Subscribe from '../../controllers/subscriptionController';
import subscribeValidation from '../../validation/subscriptionValidation';

const router = express.Router();

router
  .route('/subscribe')
  .post(subscribeValidation.validateData, Subscribe.subscribe);
router
  .route('/unsubscribe')
  .patch(subscribeValidation.validateData, Subscribe.unsubscribe);
router.route('/active').get(Subscribe.getSubscribers);
router.route('/').get(Subscribe.getAllSubscribers);
export default router;
