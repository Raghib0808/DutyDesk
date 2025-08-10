import mongoose from "mongoose";

const connectDb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected yahoo 🐔');
                
    }   
    catch(err){
        console.error('Error conncting to mongodb',err);
        process.exit(1);
    }
}

export default connectDb;