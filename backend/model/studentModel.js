import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        lastName:{
            type:String,
        },
        email:{
            type:String,
        },
        dob:{
            type:String,
        },
        address:{
            type:String,
        },
        phone:{
            type:Number,
        },
        prevedu:{
            type:String,
        },
        newedu:{
            type:String,
        },
        isfeecleared:{
            type:Boolean
        }
        
    },
    {timestamps:true}
);

const studentrModel = mongoose.model("student",studentSchema)

export default studentrModel;