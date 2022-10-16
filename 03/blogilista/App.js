const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()
const config = require('./utils/config')
const blogRouter = require('./controllers/blogController')

console.log('Connecting to ' + config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())
app.use('/api/blogs/', blogRouter)


module.exports = app