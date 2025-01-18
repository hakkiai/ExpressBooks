const mongoose = require('mongoose');

const BorrowSchema = new mongoose.Schema({
  student: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Student', 
    required: true 
  },
  book: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Book', 
    required: true 
  },
  borrowedAt: { 
    type: Date, 
    default: Date.now 
  },
  returnedAt: { 
    type: Date, 
    default: null 
  }
});

module.exports = mongoose.model('Borrow', BorrowSchema);