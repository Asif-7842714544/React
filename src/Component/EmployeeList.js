import {React,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeService from '../Services/EmployeService'
import Employee from './Employee'

const EmployeeList = () => {

const navigate=useNavigate()

 const [loading, setloading] = useState(true)
 const [employees, setemployees] = useState(null)
    
useEffect(() => {
  const fetchdata=async ()=>{
    setemployees(true)
    try{
        const response = await EmployeService.getEmployees();
        setemployees(response.data)
    }catch(error){
        console.log(error)
    }
    setloading(false)
  }
  fetchdata();
}, []);

const deleteEmployee =(e,id)=>{
  e.preventDefault()
  EmployeService.deleteEmployeeBy(id)
  .then((res)=>{
    if(employees){
      setemployees((prevElement)=>{
        return prevElement.filter((employee)=>employee.id !== id);
      })
    }
  })
}

const editEmployee =(e,id)=>{
  
}


  return (
    <div className='container mx-auto my-8'>
    <div className='h-12 '>
      <button 
      onClick={() => navigate("/addEmployee")}
      className="rounded bg-slate-600 text-white px-6py2 font-semibold" >
        Add Employee
      </button>
    </div>
    <div className='flex shadow border-b'>
         <table className='min-w-full'>
            <thead className='bg-gray-50'>
                <tr >
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                        firstName
                    </th>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                        lastName
                    </th>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                        EmailId
                        
                    </th>
                    <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                        Actions
                    </th>
                </tr>
            </thead>
            {!loading &&(
            <tbody className='bg-white'>
                {employees.map((employee) =>(
                <Employee 
                employee={employee}  
                deleteEmployee={deleteEmployee}
                key={employee.id}/>
                )) }
            </tbody>
            )}
         </table>
    </div>
    </div>
  )
}

export default EmployeeList
