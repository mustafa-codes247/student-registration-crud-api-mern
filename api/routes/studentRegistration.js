import express from "express"

import {
    createStudent,getStudent,updateStudent,deleteStudent,getSingleStudent
} from "../controller/student.js"

const routers = express.Router();

routers.post("/create",createStudent);
routers.get("/get",getStudent);
routers.put("/update/:id",updateStudent);
routers.delete("/delete/:id",deleteStudent);
routers.get("/get/:id", getSingleStudent);

export default routers;

