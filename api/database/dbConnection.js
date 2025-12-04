import mongoose from "mongoose";

export const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "students"
    }).then(()=>{
        console.log("connected to database successfully")
    }).catch((error)=>{
        console.log(`some error occured while connecting to database${error}`)
    })
}