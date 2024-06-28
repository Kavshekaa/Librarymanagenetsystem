const mongoose = require('../db'); // Path to your db.js file
const Schema = mongoose.Schema;

const loanSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  member: { type: Schema.Types.ObjectId, ref: 'Member', required: true },
  loanDate: { type: Date, required: true },
  returnDate: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Loan', loanSchema);
