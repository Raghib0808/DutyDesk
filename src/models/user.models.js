import mongoose, { mongo } from "mongoose";

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

export const User =  mongoose.model("User",UserSchema);