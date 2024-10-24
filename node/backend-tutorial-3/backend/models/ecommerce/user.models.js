import mongoose from 'mongoose';

const userSchelma=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'user'
    },
    contactNumber:{
        type:String
    },
    profilePicture:{
        type:String
    }
},
{
    timestamps:true
})