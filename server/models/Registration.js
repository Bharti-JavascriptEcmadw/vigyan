// models/Registration.js
const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['NIB', 'Workshop'],
    required: true,
  },
  city: String,
  school: String,
  workshop: String,

  category: {
    type: String,
    enum: ['Junior', 'Senior'],
    required: true,
  },
  subCategory: String, // class: 6th, 7th, etc.

  leaderName: { type: String, required: true },
  member1: { type: String, required: true },
  member2: { type: String, required: true },
  member3: { type: String, required: true },

  className: { type: String, required: true },
  schoolAddress: { type: String, required: true },

  contact: { type: String, required: true },
  email: { type: String, required: true },

  feeMode: {
    type: String,
    enum: ['online', 'offline'],
    required: true,
  },

  receiptFileUrl: String, // URL or path to uploaded file (optional if offline)

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Registration', registrationSchema);
