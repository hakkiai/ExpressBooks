const Book = require('../models/Book');
const Borrow = require('../models/Borrow');

exports.createBook = async (req, res) => {
    try {
        const { title, author } = req.body;
        const book = new Book({ title, author });
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const { title, author } = req.body;
        const book = await Book.findByIdAndUpdate(
            req.params.id, 
            { title, author }, 
            { new: true, runValidators: true }
        );
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getMostPopularBooks = async (req, res) => {
    try {
        const popularBooks = await Borrow.aggregate([
            { $group: { 
                _id: '$book', 
                borrowCount: { $sum: 1 } 
            }},
            { $lookup: { 
                from: 'books', 
                localField: '_id', 
                foreignField: '_id', 
                as: 'bookDetails' 
            }},
            { $unwind: '$bookDetails' },
            { $sort: { borrowCount: -1 } },
            { $limit: 10 },
            { $project: { 
                _id: '$bookDetails._id',
                title: '$bookDetails.title',
                author: '$bookDetails.author',
                borrowCount: 1 
            }}
        ]);
        res.json(popularBooks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};