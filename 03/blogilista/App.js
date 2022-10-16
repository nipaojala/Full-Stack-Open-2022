const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const mongoUrl = 'mongodb+srv://nipa:2Bc_productions@cluster0.gbmi2kb.mongodb.net/Blogs?retryWrites=true&w=majority'
console.log('Connecting to ' + mongoUrl)
mongoose.connect(mongoUrl)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

module.exports = app