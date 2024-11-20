import mongoose from "mongoose";
import { MONGO_URI } from "../constants";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            //path

        });
        app.on("ready", () => {
            console.log("MongoDB connected");
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed");
        process.exit(1);
    }
    }
