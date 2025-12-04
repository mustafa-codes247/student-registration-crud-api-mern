import React, { useEffect, useState } from 'react'
import axiosInstance from '../api/axios'
import {Link} from "react-router-dom"

const GetStudents = () => {
  const [student, setStudent]= useState([]);

  useEffect(()=>{
    axiosInstance
    .get("/api/student/get")
    .then((res)=>{
      console.log(res.data.students);
      setStudent(res.data.students)
    })
    .catch((error) => {
  console.error("Error fetching data:", error);
});

  },[]);

  const handleDelete = async (studentId)=>{
    try {
      
      await axiosInstance.delete(`/api/student/delete/${studentId}`);
      setStudent (student.filter((student)=>student._id !== studentId))
    } catch (error) {
      console.error("error deleting student:",error);
      
    }
  }

  return (
    <>
    <div className='flex justify-center'>
      <h1 className='py-3 px-2 my-3 bg-white border border-black  w-[170px] text-center'>All students</h1>
    </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-1 px-2'>

     {student.map((list,index)=>(
      <div key={list} className='border rounded=md p-4 shadow-xl  bg-white rounded-xl'>
            <h1 className='font-bold text-xl py-3 '>Student No: {index + 1}</h1>
            <p className=''> Name: {list.name}</p>
            <p className=''>Last Name: {list.lastName}</p>
            <p className=''>Email: {list.email}</p>
            <p className=''>Date od birth {list.dob}</p>
            <p className=''>Address: {list.address}</p>
            <p className=''>Contact: {list.phone}</p>
            <p className=''>Previous Education:{list.prevedu}</p>
             <p className=''>Course to Enroll: {list.newedu}</p>
             <p className=''>Fees Status: {list.isfeecleared? 'Cleared ✅' : 'Pending ❌'}</p>
             
              <div className='py-4 flex justify-between'>

             <Link to={`/update/${list._id}`}>
             <button className='bg-green-600 text-white px-4 py-2 rounded-md mr-2'>Edit</button>
             </Link>

             <button onClick={()=>handleDelete(list._id)}
              className='bg-red-600 text-white px-4 py-2 rounded-md mr-2'>
              Delete Student
             </button>


             </div>
             
             
             
            

      </div>

      
      
     ))}
    </div>
   <div>
    <Link to='/register'>
    <button className='flex flex-col w-[170px] bg-white border border-black mx-auto mt-[1rem]   shadow-xl py-3 px-2 my-3 hover:bg-blue-500'>Register new Student</button>
    </Link> 
   </div>
    </>
  )
}

export default GetStudents
