import studentModel from "../model/studentModel.js";

const createStudent = async (req,res)=>{
    try{
        const {name,lastName,email,dob,address,phone,prevedu,newedu,isfeecleared}=req.body;
        const newStudent = new studentModel({name,lastName,email,dob,address,phone,prevedu,newedu,isfeecleared});

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
        const students= await studentModel.find();
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

const getSingleStudent = async (req, res) => {
  try {
    const student = await studentModel.findById(req.params.id);
    res.status(200).json({ success: true, student });
  } catch (error) {
    res.status(500).json({ success: false, message: "internal error", error });
  }
};

const updateStudent = async (req,res)=>{
    try {

        const studentId = req.params.id;
        const updatedStudent= await studentModel.findByIdAndUpdate(studentId,req.body,{
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
        const deletedStudent =  await studentModel.findByIdAndDelete(studentId)

        if(!deletedStudent){
            return res
            .status(404)
            .json({success:false,message:"student not found"})
        }
        res
        .status(200)
        .json({success:true,message:"student deleted successfully"})
        
    } catch (error) {
        console.error(error);
        res.status(500).json({success:false,message:"internal server error"})
    }
};

export {createStudent,getStudent,updateStudent,deleteStudent,getSingleStudent};