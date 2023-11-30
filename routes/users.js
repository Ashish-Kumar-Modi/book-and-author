const mongoose = require('mongoose')
const book = require("./book")

mongoose.connect('mongodb://127.0.0.1:27017/nBexpress')

const userSchema = mongoose.Schema({

  name: String,
  username: String,
  password: String,
  books: [ { type: mongoose.Schema.Types.ObjectId, ref: "book"} ]

})

module.exports = mongoose.model("users", userSchema);
