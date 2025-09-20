

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
