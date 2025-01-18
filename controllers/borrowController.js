const Borrow = require('../models/Borrow');
const Book = require('../models/Book');

exports.borrowBook = async (req, res) => {
    try {
        const { studentId, bookId } = req.body;
        
        // Check if book is already borrowed
        const existingBorrow = await Borrow.findOne({ 
            book: bookId, 
            returnedAt: null 
        });
        if (existingBorrow) {
            return res.status(400).json({ message: 'Book is already borrowed' });
        }

        // Create borrow record
        const borrow = new Borrow({ 
            student: studentId, 
            book: bookId 
        });
        await borrow.save();

        // Increment book's borrow count
        await Book.findByIdAndUpdate(bookId, { 
            $inc: { borrowCount: 1 } 
        });

        res.status(201).json(borrow);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllBorrowRecords = async (req, res) => {
    try {
        const borrowRecords = await Borrow.find()
            .populate('student', 'name email')
            .populate('book', 'title author');
        res.json(borrowRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.returnBook = async (req, res) => {
    try {
        const borrow = await Borrow.findByIdAndUpdate(
            req.params.id, 
            { returnedAt: new Date() }, 
            { new: true }
        );

        if (!borrow) {
            return res.status(404).json({ message: 'Borrow record not found' });
        }

        res.json({ message: 'Book returned successfully', borrow });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};