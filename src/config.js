const mongoose = require('mongoose')
const connect = mongoose.connect("mongodb://localhost:27017/express-js")

connect.then(() => {
  console.log('Database connected successfully')
})
  .catch(() => {
    console.log('Database cannot be connected')
  })

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

const collection = new mongoose.model('users', userSchema)

module.exports = collection