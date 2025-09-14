// import GetMessage from '../models/getintouch.js'; // Mongoose model

// // Create a new message (POST)
// export const createMessage = async (req, res) => {
//   try {
//     const { name, email, phone, message, course } = req.body;

//     // Basic validation
//     if (!name || !email || !phone || !message || !course) {
//       return res.status(400).json({ 
//         error: "All fields (name, email, phone, message, course) are required." 
//       });
//     }

//     // Phone number validation
//     const phoneRegex = /^[0-9]{10}$/;
//     if (!phoneRegex.test(phone)) {
//       return res.status(400).json({ error: "Please enter a valid 10-digit phone number." });
//     }

//     const newMessage = await GetMessage.create({ name, email, phone, message, course });
//     res.status(201).json(newMessage);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // Get all messages (GET)
// export const getAllMessages = async (req, res) => {
//   try {
//     const messages = await GetMessage.find().sort({ createdAt: -1 }); // DESC
//     res.status(200).json(messages);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Delete single message by ID
// export const deleteMessage = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const deleted = await GetMessage.findByIdAndDelete(id);
//     if (!deleted) {
//       return res.status(404).json({ message: "Message not found" });
//     }

//     res.status(200).json({ message: "Message deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Delete multiple messages
// export const deleteMultipleMessages = async (req, res) => {
//   const { ids } = req.body;

//   if (!Array.isArray(ids) || ids.length === 0) {
//     return res.status(400).json({ message: "Invalid request. 'ids' must be a non-empty array." });
//   }

//   try {
//     const result = await GetMessage.deleteMany({ _id: { $in: ids } });
//     res.status(200).json({ message: `${result.deletedCount} messages deleted successfully.` });
//   } catch (err) {
//     res.status(500).json({ message: "Failed to delete selected messages", error: err.message });
//   }
// };



import { sendEmail } from '../config/sendEmail.js'; // reusable nodemailer function

// POST: Send email when user submits contact form
export const createMessage = async (req, res) => {
  const { name, email, phone, message, course } = req.body;

  // Basic validation
  if (!name || !email || !phone || !message || !course) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    await sendEmail({ name, email, phone, message, course });
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
};

// OPTIONAL: These functions should be removed if DB is not used
export const getAllMessages = (req, res) => {
  res.status(403).json({ message: "Fetching messages not supported (no DB used)." });
};

export const deleteMessage = (req, res) => {
  res.status(403).json({ message: "Deleting messages not supported (no DB used)." });
};

export const deleteMultipleMessages = (req, res) => {
  res.status(403).json({ message: "Bulk delete not supported (no DB used)." });
};
