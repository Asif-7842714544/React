import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeService from '../Services/EmployeService';

const AddEmployee = () => {

  const [Employee, setEmployee] = useState({
    id:"",
    firstName:"",
    lastName:"",
    emailId:""
})

const navigate=useNavigate();

const handleChange=(e)=>{
    const value=e.target.value;
    setEmployee({
        ...Employee,[e.target.name]:value
    })
}

const reset=(e)=>{
  e.preventDefault();
  setEmployee({
    id:"",
    firstName:"",
    lastName:"",
    emailId:""
  })
}

const saveEmployee = (e) => {
    e.preventDefault();
     EmployeService.saveEmployee(Employee)
    .then((response) => {
      console.log(response);
       navigate("/employeeList");
}).catch((err)=>{
    console.log(err);
})
}
  return (
    <div className='flex max-w-2xl mx-auto shadow border-b' >
      <div className=' px-8 py-8 '>
         <div className='font-thin text-2xl tracking-wider'>
            <h1>Add New Employee</h1>
         </div>
         <div className='items-center justify-center h-14 w-full my-4'>
           <label className=' block text-gray-600 text-sm font-normal'>
            First Name
            </label>
            <input 
           type="text" 
           name='firstName'
           value={Employee.firstName}
           onChange={(e)=>handleChange(e)}
           placeholder='Enter firstName' 
           className='h-10 w-96 border mt2 px-2 py-2'>
           </input>
         </div>
         <div className='items-center justify-center h-14 w-full my-4'>
           <label className=' block text-gray-600 text-sm font-normal'>
            Last Name
            </label>
            <input 
           type="text" 
           name='lastName'
           value={Employee.lastName}
           onChange={(e)=>handleChange(e)}
           placeholder='Enter LastName' 
           className='h-10 w-96 border mt2 px-2 py-2'>
           </input>
         </div>
         <div className='items-center justify-center h-14 w-full my-4'>
           <label className=' block text-gray-600 text-sm font-normal'>
            Email
            </label>
           <input 
           type="Email" 
           name='emailId'
           value={Employee.emailId}
           onChange={(e)=>handleChange(e)}
           placeholder='Enter Email' 
           className='h-10 w-96 border mt2 px-2 py-2'>
           </input>
         </div>
         <div className='items-center justify-center h-14 w-full my-4 space-x-4'>
           <button onClick={saveEmployee}  className='rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700  ' >
            Save
           </button>
           <button onClick={reset} className='rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700  ' >
            Clear
            </button>
         </div>
      </div>
    </div>
  )
}

export default AddEmployee
