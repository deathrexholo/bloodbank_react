const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  location: { type: String, required: true },
  mobileNo: { type: String, required: true },
  type: { type: String, enum: ['donor', 'receiver'], required: true },
  timeRequired: { type: Date, required: true },
});

module.exports = mongoose.model('User', UserSchema);