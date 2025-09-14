import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
    },
    phone: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      enum: ['Teacher', 'Student', 'Trainer', 'Parent', 'Principal'],
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    schoolName: {
      type: String,
      required: true,
    },
    preferredDate: {
      type: String, // You can use Date type if storing full date object
      required: true,
    },
    preferredTime: {
      type: String,
      enum: [
        'Morning (9AM - 12PM)',
        'Afternoon (12PM - 3PM)',
        'Evening (3PM - 6PM)',
      ],
      required: true,
    },
    requirement: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'registrations', // Optional: set your collection name
    timestamps: true,
  }
);

const Registration = mongoose.model('Registration', registrationSchema);

export default Registration;
