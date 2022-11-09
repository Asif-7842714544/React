import axios from "axios";

const Employee_Api_Base_Url="http://localhost:8080/api/v1/employees"

const get_url="http://localhost:8080/api/v1/Allemployees"
class EmployeeService{

 saveEmployee(employee){
    return axios.post(Employee_Api_Base_Url,employee)
     }

     getEmployees(){
    return axios.get(get_url) 
    }

    deleteEmployeeBy(id){
        return axios.delete(Employee_Api_Base_Url+"/"+id)
    }

    getEmployeesById(id){
        return axios.get(Employee_Api_Base_Url+"/"+id)
    }

    updateEmployee(employee,id){
       return axios.put(Employee_Api_Base_Url+"/"+id,employee)
    }
}

export default new EmployeeService();