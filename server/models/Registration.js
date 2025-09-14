// models/Registration.js
import mongoose from 'mongoose';

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
  subCategory: String,

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

  receiptFileUrl: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Registration = mongoose.model('Registration', registrationSchema);

export default Registration;
