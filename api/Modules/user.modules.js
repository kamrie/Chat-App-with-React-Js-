import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username : {
          type : String,
          required : true,
          unique: true     //meaning two users cannot have the same username.
       },
    email : {
          type : String,
          required : true,
          unique: true
       },
    password : {
          type : String,
          required : true,
          //password doesnt have to be unique cus two people can have the same password. 
       }
}, {timestamps: true});   //THE timestamp here records 2 informations which includes Time of the creation of the user and the Time of update of the user


const User = mongoose.model('User', userSchema)

export default User;