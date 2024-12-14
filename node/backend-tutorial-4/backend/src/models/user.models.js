import mongoose,{Schema} from 'mongoose';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//how to encrypt the password now???

//Schema to destructure the object


const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true // to make the search faster tho it will take more space and take few resources
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        

    },
    fullname:{
        type:String,
        required:true,
        trim:true
    },
    avatar:{
        type:String,
        default:"https://www.gravatar.com/avatar"
    },
    coverImage:{
        type:String
    },
    watchList:[{// this syntax is used to create an array of objects{}!
        type:Schema.Types.ObjectId,
        ref:'Videos'
    }],
    passwoerd:{
        tpe:String,
        required:[true,'Password is required']
    }

});

userSechema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,8);
    }
    next();
}); 
// to inject methods updateone delecte one custtom methods are also posible 
userSchema.methods.isPasswordCorrect=async function (password){
    return await bcrypt.compare(password,this.password);  // this.password is the hashed password
}


userSechema.methods.generateAccessToken=async function(){
    jwt.sign({
        id:this._id
    },
    process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES
    })
}
userSchema.methods.generateAccessToken=async function(){}

export const User=mongoose.model('Users',userSchema); 

