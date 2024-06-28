const Book = require('./models/Book');

async function deleteRecords() {
  try {
    const deletedBooks = await Book.deleteMany({ inventoryCount: { $lt: 1 } });
    console.log('Deleted books:', deletedBooks);
  } catch (err) {
    console.error('Error deleting records:', err);
  } finally {
    process.exit(); // Exit the script
  }
}

deleteRecords();
