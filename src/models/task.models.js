import mongoose, { mongo, Schema } from "mongoose";
import { AvailableTaskStatus, AvailableUserRoles, TaskStatusEnum } from "../utils/constants";

const tashSchema = new mongoose.Schema({
        title:{
            type:String,
            required:true,
            trim:true
        },
        description:{
            type:String,
            required:true,
            trim:true
        },
        project:{
            type: Schema.Types.ObjectId,
            ref:"Project",
            required:true,
        },
        assignedTo:{
            type: Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        assignedBy:{
            type: Schema.Types.ObjectId,
            ref:"Project",
            required:true,
        },
        status:{
            type:String,
            enum:AvailableTaskStatus,
            default: TaskStatusEnum.TODO
        },
        attachments:{
            type: [
                {
                    url: String,
                    minetype: String,
                    size: Number,
                }
            ]
        }
},{timestamps:true})

export const Task =  mongoose.model("Task",tashSchema);