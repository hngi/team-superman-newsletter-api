/* eslint-disable no-unused-expressions */
import express from 'express';

import Subscribe from '../../controllers/subscribeController';
import subscribeValidation from '../../validation/subscribeValidation';

const router = express.Router();

router
  .route('/subscribe')
  .post(subscribeValidation.validateData, Subscribe.subscribe);

export default router;
