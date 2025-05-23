const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema ({
  cookieId: { type: String, required: true },
  createdAt: { type: Date, expires: 180, default: Date.now }
});

module.exports = mongoose.model('Session', sessionSchema);