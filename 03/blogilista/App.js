const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()
const config = require('./utils/config')
const logger = require('./utils/logger')
const blogRouter = require('./controllers/blogController')

logger.info('Connecting to ' + config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())
app.use('/api/blogs/', blogRouter)


module.exports = app