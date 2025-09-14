import mongoose from 'mongoose';

const getMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      enum: [
        'Web Development',
        'IoT',
        'Robotics',
        'AI & Coding',
        'Other',
        'Drone Technology',
        'STEM Learning Programs',
        'ATAL Tinkering Lab',
        'Coding & Logic Building',
      ],
      default: 'Other',
      required: true,
    },
  },
  {
    collection: 'get_message', // Equivalent to `tableName: 'get_message'`
    timestamps: true,          // Adds createdAt and updatedAt automatically
  }
);

const GetMessage = mongoose.model('GetMessage', getMessageSchema);

export default GetMessage;
