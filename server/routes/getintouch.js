
// import express from 'express';
// import {
//   createMessage,
//   getAllMessages,
//   deleteMessage,
//   deleteMultipleMessages
// } from '../controller/getintouch.js';

// const router = express.Router();

// router.post('/', createMessage);
// router.get('/', getAllMessages);
// router.delete('/:id', deleteMessage);

// router.post("/delete-multiple", deleteMultipleMessages);


// export default router;



import express from 'express';
import { createMessage } from '../controller/getintouch.js';

const router = express.Router();

router.post('/', createMessage);

export default router;
