import mongoose from "mongoose";

const todoSchema= new mongoose.Schema({
    contend:{
        type:String,
        required:true,


    },
    isCompleted:{
        type:Boolean,
        default:false,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,//user type and this is referencece
        ref:'User',
        // export const User=mongoose.model('User',<-- this name not the const user name-->userSchema); 
    },
    subtodo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'SubTodo',
    }


},
{
    timestamps: true,
})
export const Todo=mongoose.model('Todo',todoSchema);
//name and what bases the db will be made
