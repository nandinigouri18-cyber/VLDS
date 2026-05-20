// basic User model

const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  role: { type: String, enum: ['user', 'admin', 'vendor'], default: 'user' },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', UserSchema)
