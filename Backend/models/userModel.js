const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: [String],
    url:  String,
    price: Number,
  }

);

module.exports = mongoose.model('User', userSchema);