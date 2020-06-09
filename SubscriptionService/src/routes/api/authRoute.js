/* eslint-disable no-unused-expressions */
import express from 'express';

import authController from '../../controllers/authController';
import authValidation from '../../validation/authValidation';

const router = express.Router();

router
  .route('/signup')
  .post(authValidation.validateData, authController.signup);

export default router;
