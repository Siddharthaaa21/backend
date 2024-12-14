import mongoose from "mongoose";
import mongoosePaginate from "mongoose-aggregate-paginate-v2";//step 1




const videoSchema = new mongoose.Schema({
    videoFile:{
        type: String,
        required: true
    },
    duration:{
        type:Number,
        required:true
    },
    views:{
        default:0,
        type:Number
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    },
    isPublished:{
        type:Boolean,
        default:false
    },

});


export const Video = mongoose.model("Videos", videoSchema);
//mongoose-agregate-paginate-v2
