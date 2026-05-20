// Simple Express server with MongoDB connection (starter)

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// Basic health route
app.get('/api/health', (req, res) => res.json({ status: 'ok', service: 'VLDS Backend' }))

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/vlds'
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error', err))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
