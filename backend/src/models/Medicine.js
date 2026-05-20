// basic Medicine model for catalog

const mongoose = require('mongoose')
const { Schema } = mongoose

const MedicineSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, index: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  available: { type: Boolean, default: true },
  description: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Medicine', MedicineSchema)
