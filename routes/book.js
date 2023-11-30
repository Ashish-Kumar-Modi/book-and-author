const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    
    bookName: String,
    authorid: { type: mongoose.Schema.Types.ObjectId,ref: 'users'}
})

module.exports = mongoose.model("book", bookSchema)