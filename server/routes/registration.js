// routes/registrationRoutes.js
import express from 'express';
import multer from 'multer';
import { createRegistration } from '../controllers/registrationController.js';

const router = express.Router();

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // make sure this folder exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  '/',
  upload.single('receiptFile'), // handle file field if online payment
  createRegistration
);

export default router;
