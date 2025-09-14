// controllers/registrationController.js
const Registration = require('../models/Registration');

// For file uploads (if using multer)
const createRegistration = async (req, res) => {
  try {
    const {
      type,
      city,
      school,
      workshop,
      category,
      subCategory,
      leaderName,
      member1,
      member2,
      member3,
      className,
      schoolAddress,
      contact,
      email,
      feeMode,
    } = req.body;

    const receiptFileUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newRegistration = new Registration({
      type,
      city,
      school,
      workshop,
      category,
      subCategory,
      leaderName,
      member1,
      member2,
      member3,
      className,
      schoolAddress,
      contact,
      email,
      feeMode,
      receiptFileUrl,
    });

    await newRegistration.save();

    res.status(201).json({ message: 'Registration submitted successfully.' });
  } catch (error) {
    console.error('Error in registration:', error);
    res.status(500).json({ error: 'Something went wrong while registering.' });
  }
};

module.exports = {
  createRegistration,
};
