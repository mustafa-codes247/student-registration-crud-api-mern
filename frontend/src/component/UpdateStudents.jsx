import React, { useEffect, useState } from 'react'
import {useNavigate,useParams} from "react-router-dom" 
import axios from "axios";

const UpdateStudents = () => {
  const {id}=useParams();
  const [formValue,setFormValue]=useState({});
  const navigate = useNavigate();


  useEffect(()=>{
    if(id){
      const fetchStudent =async()=>{
        try {
          const res= await axios.get(
            `http://localhost:3030/student/update/${id}`
          );
          setFormValue(res.data);
          console.log(res.data);
        } catch (error) {
          console.log("error fetching student data",error)
          
        }
      }
      fetchStudent();
    }
  },[id]);

  const handleChange= (e)=>{
    setFormValue({...formValue,[e.target.name]: e.target.value});
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();

    try{
      const res= await axios.put(
        `http://localhost:3030/student/update/${id}`,formValue
      );
      console.log("response",res.data.students);
        navigate("/");
    }
    catch(error){
console.log("error",error)
    }
  }

  return (
    <div>
     <div className='flex justify-center'>
        <h1 className='py-3 px-2 my-3 bg-blue-400 text-center w-[250px] text-white'>Update Selected Student</h1></div>
   <form
    onSubmit={handleSubmit}
    className='flex flex-col w-[500px] bg-blue-300 mx-auto mt-[1rem] p-2 rounded-xl shadow-xl'
    >
    
    {/* name field */}
    <input
    type="text"
    name="name"
    value={formValue.name}
    onChange={handleChange}
    placeholder='enter student name'
    className='mb-4 py-2 px-4 rounded-md bg-white-200 focus:outline-none focus:bg-white text-center'
     />

     {/*last name field */}
    <input
    type="text"
    name="lastName"
    value={formValue.lastName}
    onChange={handleChange}
    placeholder='enter student last name'
    className='mb-4 py-2 px-4 rounded-md bg-white-200 focus:outline-none focus:bg-white text-center'
     />

      

       {/*email field */}
    <input
    type="text"
    name="lastName"
    value={formValue.lastName}
    onChange={handleChange}
    placeholder='enter student last name'
    className='mb-4 py-2 px-4 rounded-md bg-white-200 focus:outline-none focus:bg-white text-center'
     />

      {/*dob field */}
    <input
    type="text"
    name="dob"
    value={formValue.dob}
    onChange={handleChange}
    placeholder='enter date of birth'
    className='mb-4 py-2 px-4 rounded-md bg-white-200 focus:outline-none focus:bg-white text-center'
     />

        {/*address field */}
    <input
    type="text"
    name="address"
    value={formValue.address}
    onChange={handleChange}
    placeholder='enter student address'
    className='mb-4 py-2 px-4 rounded-md bg-white-200 focus:outline-none focus:bg-white text-center'
     />

       {/*phone field */}
    <input
    type="number"
    name="phone"
    value={formValue.phone}
    onChange={handleChange}
    placeholder='enter student contact number'
    className='mb-4 py-2 px-4 rounded-md bg-white-200 focus:outline-none focus:bg-white text-center'
     />
      {/*previous education field */}
    <input
    type="text"
    name="prevedu"
    value={formValue.prevedu}
    onChange={handleChange}
    placeholder='enter student previous education'
    className='mb-4 py-2 px-4 rounded-md bg-white-200 focus:outline-none focus:bg-white text-center'
     />
      {/*course to enroll field */}

      <select   name="newedu"
    value={formValue.newedu}
    onChange={handleChange}
    placeholder='enter student course to enroll'
    className='mb-4 py-2 px-4 rounded-md bg-white-200 focus:outline-none focus:bg-white text-center'>

      <option value=""> select course</option>
      <option value="web-development">Web Development</option>
        <option value="python">Python Programming</option>
        <option value="data-science">Data Science</option>
        <option value="graphic-design">Graphic Designing</option>

      </select>


  

      {/*fees field */}

      <select
    type="text"
    name="isfeecleared"
    value={formValue.isfeecleared}
    onChange={handleChange}
    className='mb-4 py-2 px-4 rounded-md bg-white-200 focus:outline-none focus:bg-white text-center'
    >
        <option value="">Is Student's Fees Cleared?</option>
        <option value="true">yes</option>
        <option value="false">no</option>
 
      </select>
  <div c>
     <button
     type='submit'
     className='py-2 px-4 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition duration-300 item-center'
     >
    update
     </button>

     {/* <button onClick={}>
      cancel
     </button> */}
</div>

    </form>
    </div>
  )
}

export default UpdateStudents
