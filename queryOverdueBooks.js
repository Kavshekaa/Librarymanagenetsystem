const Loan = require('./models/Loan');

async function queryOverdueBooks() {
  try {
    const today = new Date();
    const overdueBooks = await Loan.find({ returnDate: null, loanDate: { $lt: today } }).populate('book');
    console.log('Overdue books:', overdueBooks);
  } catch (err) {
    console.error('Error querying overdue books:', err);
  } finally {
    process.exit(); // Exit the script
  }
}

queryOverdueBooks();
