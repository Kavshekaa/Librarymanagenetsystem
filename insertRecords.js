const Book = require('./models/Book');
const Member = require('./models/Member');
const Loan = require('./models/Loan');

async function insertRecords() {
  try {
    // Insert new books
    const book1 = new Book({
      title: 'Book A',
      author: 'Author A',
      category: 'Category A',
      ISBN: '1234567890',
      description: 'Description of Book A',
      inventoryCount: 5
    });
    await book1.save();

    // Insert new members
    const member1 = new Member({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      address: '123 Main St, Anytown'
    });
    await member1.save();

    // Insert new loan
    const loan1 = new Loan({
      book: book1._id,
      member: member1._id,
      loanDate: new Date(),
      returnDate: null // Assuming it's not returned yet
    });
    await loan1.save();

    console.log('Records inserted successfully');
  } catch (err) {
    console.error('Error inserting records:', err);
  } finally {
    process.exit(); // Exit the script
  }
}

insertRecords();
