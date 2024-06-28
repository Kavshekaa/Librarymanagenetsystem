const Loan = require('./models/Loan');
const Member = require('./models/Member');

async function queryTopBorrowers() {
  try {
    const topBorrowers = await Loan.aggregate([
      { $group: { _id: '$member', totalLoans: { $sum: 1 } } },
      { $sort: { totalLoans: -1 } },
      { $limit: 5 }
    ]).lookup({
      from: 'members',
      localField: '_id',
      foreignField: '_id',
      as: 'member'
    });

    console.log('Top borrowers:', topBorrowers);
  } catch (err) {
    console.error('Error querying top borrowers:', err);
  } finally {
    process.exit(); // Exit the script
  }
}

queryTopBorrowers();
