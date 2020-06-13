/* eslint-disable no-unused-vars */
const mongoose =require ('mongoose');

const subscriptionSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    status: { type: Boolean, required: true }
  },
  { timestamps: true }
);

const Subscription = mongoose.model('Subscription', subscriptionSchema);
module.exports = Subscription;
