import mongoose from 'mongoose';
const userSchema=new mongoose.Schema({
    // name:String,
    // email:String,
    // isActive:Boolean, basics but for industrial use we use the below one 
    name:{
        type:String,
        required:true,
        unique:true,
        // lowercase:true,
        uppercase:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    }
    ,
    isActive:{
        type:Boolean,
        default:true,
    },
},
{
    timestamps:true,
}
);

export const User=mongoose.model('User',userSchema);