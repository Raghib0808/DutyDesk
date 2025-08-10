import mongoose, { mongo, Schema } from "mongoose";
import { type } from "os";

const productModelShema= new mongoose.Schema({
        project:{
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        description:{
            type:stringify,
        },
        createdBy:{
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        
})

export const Project =  mongoose.model("Project",productModelShema);