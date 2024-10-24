import mongoose from 'mongoose';

const patiendRecordsSchema = new mongoose.Schema({

    gender:{
        type:String,
        enums:["M","F","O"],
        required:true,
    },
    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital',
    }
}, { timestamps: true });

export const PatiendRecords = mongoose.model('PatiendRecords', patiendRecordsSchema);  