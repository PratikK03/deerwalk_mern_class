// Database Connection code.
// mongoose [command: npm i mongoose >to install mongoose ]

import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{});

        console.log("Connected to MongoDB");
    } 
    catch (err){
        console.log("Failed to make connection");
        process.exit(1);
    }
};

export default connectDB;
