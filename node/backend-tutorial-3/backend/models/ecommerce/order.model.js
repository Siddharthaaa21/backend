import mongoose from 'mongoose';
const miniOrderItemSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
    },
    quantity:{
        type:Number,
        required:true   
    }
})

const orderSchema= new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true   
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    orderItems:[miniOrderItemSchema],

    status:{
        type:String,
        enum//enum is used to restrict the values that can be inserted into a field
        :['ordered','packed','shipped','delivered','cancelled'],
        default:'ordered'

    }

},{
    timestamps:true
})