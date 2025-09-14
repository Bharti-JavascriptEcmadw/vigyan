// import express from 'express';
// import { createRegistration, getAllRegistrations } from '../controller/bookdemo.js';

// const router = express.Router();


// router.post('/register', createRegistration);

// router.get('/registrations', getAllRegistrations);

// export default router;


import express from 'express';
import {
  createRegistration,
  getAllRegistrations
} from '../controller/bookdemo.js';

const router = express.Router();

router.post('/', createRegistration);
router.get('/', getAllRegistrations); // optional — shows 403

export default router;
