const express = require('express');
const router = express.Router();
const borrowController = require('../controllers/borrowController');

router.post('/', borrowController.borrowBook);

router.get('/', borrowController.getAllBorrowRecords);

router.delete('/:id', borrowController.returnBook);

module.exports = router;