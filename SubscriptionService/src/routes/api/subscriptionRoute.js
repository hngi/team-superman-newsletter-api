/* eslint-disable no-unused-expressions */
const express =require ('express');

const Subscribe =require ('../../controllers/subscriptionController');
const subscribeValidation =require ('../../validation/subscriptionValidation');
//const JWT = require('../../middlewares/JWTMiddleware');

const router = express.Router();

router
  .route('/subscribe')
  .post(subscribeValidation.validateData, Subscribe.subscribe);
router
  .route('/unsubscribe')
  .patch(subscribeValidation.validateData, Subscribe.unsubscribe);
router.route('/active').get(Subscribe.getSubscribers);
router.route('/').get(Subscribe.getAllSubscribers);
//router.route('/active').get(JWT.decodeToken(), Subscribe.getSubscribers);
//router.route('/').get(JWT.decodeToken(), Subscribe.getAllSubscribers);

module.exports= router;
