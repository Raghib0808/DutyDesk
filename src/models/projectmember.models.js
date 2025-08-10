import mongoose, { mongo, Schema } from "mongoose";
import { AvailableUserRoles, UserRoleEnum } from "../utils/constants";

const projectMemberSchema= new mongoose.Schema({
        user:{
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        project:{
            type: Schema.Types.ObjectId,
            ref: "Project",
            required:true,
        },
        role:{
            type:String,
            enum: AvailableUserRoles,
            default: UserRoleEnum.MEMBER,
        }

},{timeStamp:true})

export const ProjectMember =  mongoose.model("ProjectMember",projectMemberSchema);