const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  name: { type: String },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  address: {
    city: { type: String },
    state: { type: String },
    country: { type: String },
    pin: { type: Number },
  },
});

let User = mongoose.model('User', userSchema);
module.exports = User;
