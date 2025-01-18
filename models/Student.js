const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,  
    trim: true,
    lowercase: true
  }
}, {
  timestamps: true
});



module.exports = mongoose.model('Student', StudentSchema);