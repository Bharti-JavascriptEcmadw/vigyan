import express from 'express';
const app= express();
import cookieParser from 'cookie-parser';
app.use(cookieParser());
app.use(express.json()); 

import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors';


import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'client/build')));



// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });



app.use(
    cors({
   origin: [process.env.FRONTEND_URL || "http://localhost:3000"], 
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true, 
    })
)

import Connectdb from './config/db.js';
Connectdb();


import getintouch from './routes/getintouch.js'
import bookdemo from './routes/bookdemo.js'
app.use("/api/messages", getintouch); 
app.use("/api/book-demo", bookdemo)



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});