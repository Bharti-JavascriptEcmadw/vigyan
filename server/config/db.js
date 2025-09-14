


// ?????? Database connection

import mongoose from "mongoose";

const Connectdb=async()=>{
    try{
   const conn=await mongoose.connect("mongodb://localhost:27017/websitevigyan")
   console.log("connected to mongodb database")
    }
    catch(err){
        console.log(`Mongoose connection error ${err}`)

    }
}
 export default Connectdb;