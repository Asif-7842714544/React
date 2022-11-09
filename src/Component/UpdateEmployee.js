import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EmployeService from '../Services/EmployeService'

const UpdateEmployee = () => {

  const {id}=  useParams()

  const [employee, setemployee] = useState({
    id:id,
    firstName:"",
    lastName:"",
    emailId:""
})

const handleChange=(e)=>{
    const value=e.target.value;
    setemployee({
        ...employee,[e.target.name]:value
    })
}

useEffect(() => {
  const fetchdata=async ()=>{
    try {
        const response=await EmployeService.getEmployeesById(id);
        setemployee(response.data)
    } catch (error) {
        console.log(error);
    }
  }
     fetchdata();
}, [])


  const updateEmployee=(e)=>{
    e.preventDefault()
  }

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b' >
      <div className=' px-8 py-8 '>
         <div className='font-thin text-2xl tracking-wider'>
            <h1>Update Employee</h1>
         </div>
         <div className='items-center justify-center h-14 w-full my-4'>
           <label className=' block text-gray-600 text-sm font-normal'>
            First Name
            </label>
            <input 
           type="text" 
           name='firstName'
           value={employee.firstName}
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
           value={employee.lastName}
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
           value={employee.emailId}
           onChange={(e)=>handleChange(e)}
           placeholder='Enter Email' 
           className='h-10 w-96 border mt2 px-2 py-2'>
           </input>
         </div>
         <div className='items-center justify-center h-14 w-full my-4 space-x-4'>
           <button onClick={updateEmployee}  className='rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700  ' >
            Update
           </button>
           <button  className='rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700  ' >
           Cancel
            </button>
         </div>
      </div>
    </div>
  )
}

export default UpdateEmployee