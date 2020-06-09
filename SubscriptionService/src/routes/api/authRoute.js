/* eslint-disable no-unused-expressions */
import express from 'express';

import authController from '../../controllers/authController';
import authValidation from '../../validation/authValidation';

const router = express.Router();

router.post('/signup', authValidation.validateData, authController.signup);
router.post('/signin', authValidation.validateSignin, authController.signin);

export default router;
