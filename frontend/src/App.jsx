import React from 'react'
import GetStudents from './component/GetStudents'
import RegisterStudents from './component/RegisterStudents'
import UpdateStudents from './component/UpdateStudents'
import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GetStudents/>}></Route>
        <Route path="/register" element={<RegisterStudents/>}></Route>
         <Route path="/update/:id" element={<UpdateStudents/>}></Route>

      </Routes>
    </div>
  )
}

export default App
