const mongoose = require('../db'); // Path to your db.js file
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  ISBN: { type: String, required: true },
  description: { type: String },
  inventoryCount: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
