//hlper file filters  
// if incase there is a probletrm there is the wrapper file in the utils asyncHandler.js
//to get the heler file 

import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from '../utils/ApiError.js';
import {User} from '../models/user.models.js';
import {ApiResponse} from '../utils/ApiResponse.js';

const registerUser=asyncHandler(async(req,res)=>{
    // res.status(200).json({
    //     message:'register user'
    // });
 //asyncHandler is a wrapper function that catches errors in async functions and passes them to Express error handlers.
// need to take value from the user 
// then validate 
//check if the user already exists  
//hash the password
//validation
//if the avatar is updated to the cloudinary
//and fetch back
//

//create userObject because we need to pass the user object to the user model in mongoose
// remove the password field from the user object because we don't want to store the password in the database
//store the user object in the database

// req.body
const {name,email,password}=req.body;
console.log(req.body);
if(!name || !email || !password){
    res.status(400);
    throw new Error('Please fill all the fields');  
}
if(fullName==""){
throw new ApiError(400,'Please fill all the fields');}
 const existingUser=User.findOne({email:email}).then((user)=>{
    if(user){
    }
});

// can also use $or operator 
// const existingUser=User.findOne({$or:[{email:email},{username:username}]}).then((user)=>{
//     if(user){
//     }
// });
if(existingUser){
    throw new ApiError(400,'User already exists');
} 


const avatarLocalPath=req.files?.avatar[0].path
//if the avatar is updated to the cloudinary
//multer gicves us the access of files and optionsal cain because we might or we might not have the Acess of the file
//arr[0] first property of object.
// and now it brings rom the multe.middlewaare

const coverImageLocalPath=req.files?.coverImage[0].path;
//if the cover image is updated to the cloudinary
//multer gicves us the access of files and optionsal cain because we might or we might not have the Acess of the file
 const avatar=await uploadToCloudinary(avatarLocalPath);
   const coverImage= await uploadToCloudinary(coverImageLocalPath);
   if(!vatar){
    throw new ApiError(400,'Avatar file is required');

    }
    const user= await User.create({
        name,
        email,
        password,
        avatar : avatar.url,
        coverImage:coverImage?.url||"",
        username:username.toLowerCase()

    })
    //  to chekc now we could make extra calls in the db 

const createdUser= await User.findById(user._id).select('-password -refreshToken');
if(!createdUser){
    throw new ApiError(500,'User not created');
}
return res.status(201).json(
    new ApiResponse(201,'User created successfully',createdUser)
);
});

export {registerUser}; //exporting the registerUser function