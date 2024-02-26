import User from "../Models/user.model.js"; //this was imported from the user.model.js
import bcryptjs from 'bcryptjs'; // a package used to HASH  a password.
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {

    // console.log(req.body)   //req.body this was meant to display the details of the user inputted from the Insomania website/ form.
   const{username, gmail, password} = req.body;
   const hashedPassword = bcryptjs.hashSync(password, 10);   //after getting the password above, we hashed it, and passed it below.

   const newUser = new User({username, gmail, password: hashedPassword}) //this was gotten from the model that was created in user.model.js and was used to save the 3 informations in line 7 
     try{
         await     newUser.save()  //this saves it on the data base and the "await" was added becus saving it might take time,
                                      //  "await" will help it the code to stay in that line until the opearation finishes,and using this "await" changed the function from synchronous to asynchronous thtas why the "async" was used in line 4.
    
        res.status(201).json("user created successfully")                              

    }catch(error){
        // res.status(500).json(error.message)
        next(error);
        // next(errorHandler(550, 'error from the function'));
     }
  
}


  