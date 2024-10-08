const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  birthDate: { type: Date, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
