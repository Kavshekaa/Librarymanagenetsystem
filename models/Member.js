const mongoose = require('../db'); // Path to your db.js file
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Member', memberSchema);
