
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './Component/AddEmployee';
import EmployeeList from './Component/EmployeeList';
import Navbar from './Component/Navbar';
import UpdateEmployee from './Component/UpdateEmployee';

function App() {
  return (
  <>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route index element={<EmployeeList/>} />
    <Route path="/" element={<EmployeeList/>} />
    <Route path="/employeeList" element={<EmployeeList/>} />
    <Route path="/addEmployee" element={<AddEmployee/>} />
    <Route path="/editEmployee/:id" element={<UpdateEmployee/>} />
  </Routes>
  </BrowserRouter>
  
  </>
  );
}

export default App;
