const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  points: { type: Number, default: 0 },
  isAdmin: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', UserSchema);
