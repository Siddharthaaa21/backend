import mongoose from "mongoose";
import { MONGO_URI } from "../constants";
 
connectDB()
.then(()=>{
    app.listen(process.env.POR||8000,()=>{  
        console.log(`Server is running on port ${process.env.PORT||8000}`);
    });   
    }
)
.catch((err)=>{
    console.log(err);

})