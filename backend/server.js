import express from "express";
import routers from "./routes/studentRegistration.js";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";

const app=express();

dotenv.config({path:"./config/config.env"});
app.use(express.json());
app.use(cors());

const PORT = 3030;

app.use('/student',routers);

dbConnection();


app.listen(PORT,()=>{
    console.log(`server listen on http://localhost:${PORT}`);
});