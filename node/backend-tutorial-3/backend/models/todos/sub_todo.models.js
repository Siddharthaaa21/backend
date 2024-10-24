import mongoose from 'mongoose';
const subTodo=new mongoose.Schema({
    // name:String,
    // email:String,
    // isActive:Boolean, basics but for industrial use we use the below one 
    title:{
        type:String,
        required:true,
        unique:true,

    },
    title:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    }
    ,
    createdby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
},
{
    timestamps:true,
}
);

export const User=mongoose.model('User',subTodo);