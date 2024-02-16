import express from 'express';
import mongoose from 'mongoose';
import dotenv  from 'dotenv';
dotenv.config()   //initializing the 'dotenv' that was imported.

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to DB well")
}).catch((err) => {
    console.log(err)
})

const app = express()
app.listen(3000, () => {
    console.log("e dey show and listen and changed")
})
 
