import app from "./app.js";
import dotenv from 'dotenv'
import connectDb from "./db/dbConnect.js";

dotenv.config({
    path:'../.env'
})

const PATH = process.env.PORT||8080;



connectDb().then(()=>{
    app.listen(PATH,()=>{
        console.log('Server is running on port :',PATH);
    })
}).catch((err)=>{
        console.err("MongoDb connection error: ",err);
        process.exit(1);
})