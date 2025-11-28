import studentrModel from "../model/studentModel.js";

const createStudent = async (req,res)=>{
    try{
        const {name,lastName,email,dob,address,phone,prevedu,newedu,isfeecleared}=req.body;
        const newStudent = new studentrModel({name,lastName,email,dob,address,phone,prevedu,newedu,isfeecleared});

        await newStudent.save();
        res
        .status(200)
        .json({success:true,message:"student created",newStudent});
    }

    catch(error){
        res
        .status(500)
        .json({success:false,message:"internal error",error});
    }
};

const getStudent = async(req,res)=>{
    try{
        const students= await studentrModel.find();
        if (students.length===0){
            return res
            .status(404)
            .json({success:false,message:"student not found",students})
        }
        res.status(200).json({success:true,students})
    }
    catch(error){
        res
        .status(500)
        .json({success:false,message:"internal error",error})
    }
};

const updateStudent = async (req,res)=>{
    try {

        const studentId = req.params.id;
        const updatedStudent= await studentrModel.findByIdAndUpdate(studentId,req.body,{
            new:true,
        });

    if (!updatedStudent){
        return res
        .status(400)
        .json({success:false,message:"student not found"})
    }
    res.status(200).json({
        success:true,
        message:"student updated successfully",
        updatedStudent,
    });
        
    } catch (error) {
        res
        .status(500)
        .json({success:false,message:"internal server error",error})
        
    }
}

const deleteStudent =  async (req,res)=>{
    try {
        const studentId = req.params.id;
        const deletedStudent =  await studentrModel.findByIdAndDelete(studentId)

        if(!deletedStudent){
            return res
            .status(404)
            .json({success:false,message:"student not found"})
        }
        res
        .status(200)
        .json({success:true,messaage:false,message:"internal server error"})
        
    } catch (error) {
        console.error(error);
        res.status(500).json({success:false,message:"internal server error"})
    }
};

export {createStudent,getStudent,updateStudent,deleteStudent};