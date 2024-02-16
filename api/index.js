import express from 'express';
import mongoose from 'mongoose';
import dotenv  from 'dotenv';
import userRouter from './routes/user.route.js';  //"useRouter" was used here instead of "router" as used in the export default, no biggie

dotenv.config()   //initializing the 'dotenv' that was imported.

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to DB well")
}).catch((err) => {
    console.log(err)
})

const app = express()
app.listen(3000, () => {
    console.log("e dey show and listen and changed oo")
});
 

 app.use("/api/user", userRouter ); // this means that anytime some goes to "/api/user" file, use that .get we created there. 
//  get('/rdr', (req, res) =>  {
//      res.send({
//         'message':' world'
//     })
//  });


