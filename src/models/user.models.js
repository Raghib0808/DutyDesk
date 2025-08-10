import mongoose, { mongo } from "mongoose";
import bcrypt from 'bcryptjs'
import crypto from 'crypto'
// user schema
const UserSchema = new mongoose.Schema({
        avatar:{
            type:{
                url: String,
                localpath: String,
            },
            default:{
                url:`https://placehold.co/600x400`,
                localpath: String
            }            
        },
        userName:{
            type:String,
            required:true,
            unique:true,
            index:true,
            trim:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            index:true,
            trim:true,
        },
        fullName:{
            type:String,
            required: true,
        },
        password:{
            type:String,
            required:true,
        },
        isEmailVerified:{
            type:Boolean,
            default:false,
        },
        forgotPasswordToken:{
            type:String,
        },
        forgotPasswordExpiry:{
            type:Date,
        },
        refreshToken:{
            type:String,
        },
        emailVerificationToken:{
            type:String
        },
        emailVerificationExpiry:{
            type:Date
        }

},{timestamps:true})


// hashing the password before storing it in the db
UserSchema.pre("save",async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
})


// signing jwt token
UserSchema.methods.generateAccessToken=async function(){
    return jwt.sign(
        {
            id:this._id,
            userName:this.userName,
            email:this.email
        },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn:process.env.ACCESS_TOKEN_EXPIRY
            }
    )
}

// generate Refresh token
UserSchema.methods.generateRefreshToken=async function(){
    return jwt.sign(
        {
            id:this._id,
            userName:this.userName,
            email:this.email
        },
            process.env.REFERSH_TOKEN_SECRET,
            {
                expiresIn:process.env.REFRESH_TOKEN_EXPIRY
            }
    )
}





// model methods
UserSchema.methods.isPasswordCorrect = async function(passowrd){
        return bcrypt.compare(passowrd,this.passowrd);
}

export const User =  mongoose.model("User",UserSchema);