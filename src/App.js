import "./App.css";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<EmployeeList />} />
          <Route index element={<EmployeeList />} />
          <Route path="/employeelist" element={<EmployeeList />} />
          <Route path="/addemployee" element={<AddEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
