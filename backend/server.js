import express from "express";
import routers from "./routes/studentRegistration.js";
import cors from "cors";
import mongoose from "mongoose";

const app=express();


app.use(express.json());
app.use(cors());

const PORT = 3030;

app.use('/student',routers);

mongoose.connect("mongodb://localhost:27017/student")
.then((res)=>console.log('connected databse successfully'));


app.listen(PORT,()=>{
    console.log(`server listen on http://localhost:${PORT}`);
});