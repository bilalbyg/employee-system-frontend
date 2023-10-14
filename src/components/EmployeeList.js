import React from "react";
import { useNavigate, useState, useEffect } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const EmployeeList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployee();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-6">
      <div className="h-12">
        <button
          onClick={() => navigate("/addemployee")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                ID
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Email ID
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {loading && (
            <tbody className="text-white">
              {employees.map((employee) => (
                <tr>
                  <td className="text-left px-6 py-4">
                    <div className="text-sm text-gray-500">{employee.id}</div>
                  </td>
                  <td className="text-left px-6 py-4">
                    <div className="text-sm text-gray-500">{employee.first_name}</div>
                  </td>
                  <td className="text-left px-6 py-4">
                    <div className="text-sm text-gray-500">{employee.last_name}</div>
                  </td>
                  <td className="text-left px-6 py-4">
                    <div className="text-sm text-gray-500">{employee.email_id}</div>
                  </td>
                  <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 text-indigo-900 px-4"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="text-indigo-600 text-indigo-900 px-4"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
