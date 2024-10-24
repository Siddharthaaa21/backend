import mongoose from 'mongoose';

const doctorRecordsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    salary:{
        type:Number,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    servingHospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
    }
}, { timestamps: true });

export const DoctorRecords = mongoose.model('DoctorRecords', doctorRecordsSchema);  