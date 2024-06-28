const Book = require('./models/Book');

async function updateRecords() {
  try {
    const bookIdToUpdate = 'bookId'; // Replace with actual book ID
    const newInventoryCount = 10;

    const updatedBook = await Book.findByIdAndUpdate(bookIdToUpdate, { inventoryCount: newInventoryCount }, { new: true });
    if (updatedBook) {
      console.log('Updated book:', updatedBook);
    } else {
      console.log('Book not found');
    }
  } catch (err) {
    console.error('Error updating record:', err);
  } finally {
    process.exit(); // Exit the script
  }
}

updateRecords();

