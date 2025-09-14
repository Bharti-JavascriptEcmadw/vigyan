// import Registration from '../models/bookdemo.js'; // Mongoose model

// // Create registration
// export const createRegistration = async (req, res) => {
//   try {
//     const {
//       firstName,
//       lastName,
//       email,
//       phone,
//       designation,
//       city,
//       schoolName,
//       preferredDate,
//       preferredTime,
//       requirement,
//     } = req.body;

//     // Check if email already exists
//     const existing = await Registration.findOne({ email });
//     if (existing) {
//       return res.status(400).json({ success: false, message: 'Email already registered.' });
//     }

//     const newRegistration = await Registration.create({
//       firstName,
//       lastName,
//       email,
//       phone,
//       designation,
//       city,
//       schoolName,
//       preferredDate,
//       preferredTime,
//       requirement,
//     });

//     res.status(201).json({
//       success: true,
//       message: 'Demo booked successfully.',
//       data: newRegistration,
//     });
//   } catch (error) {
//     console.error('Error saving registration:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error.',
//       error: error.message,
//     });
//   }
// };

// // Get all registrations
// export const getAllRegistrations = async (req, res) => {
//   try {
//     const registrations = await Registration.find().sort({ createdAt: -1 }); // Latest first

//     res.status(200).json({
//       success: true,
//       data: registrations,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: 'Server error while fetching registrations',
//       error: error.message,
//     });
//   }
// };


import { sendDemoEmail } from '../config/sendEmailBook.js'; // separate function for demo mail

export const createRegistration = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      designation,
      city,
      schoolName,
      preferredDate,
      preferredTime,
      requirement,
    } = req.body;

    // Validation
    if (
      !firstName || !lastName || !email || !phone || !designation ||
      !city || !schoolName || !preferredDate || !preferredTime || !requirement
    ) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    // Send email (no DB save)
    await sendDemoEmail({
      firstName,
      lastName,
      email,
      phone,
      designation,
      city,
      schoolName,
      preferredDate,
      preferredTime,
      requirement,
    });

    res.status(200).json({
      success: true,
      message: 'Demo request submitted successfully.',
    });

  } catch (error) {
    console.error('Error sending demo request email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send demo request.',
      error: error.message,
    });
  }
};

export const getAllRegistrations = async (req, res) => {
  res.status(403).json({ success: false, message: 'Demo data not stored — no access available.' });
};
