import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Pagination from "./Pagination";
import EmployeRow from "./EmployeRow";
import { useEmployees } from "../context/EmployeesContext";

const EmployeesTable = () => {
  const [query, setQuery] = useState("");
  const { employees, setIsOpen } = useEmployees();

  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 10; // Display 10 employees per page

  // Filter employees based on the search query
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(query.toLowerCase())
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

  // Get employees for the current page
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  return (
    <div className="px-6 py-4 mt-4 bg-white rounded-lg shadow">
      <div className="relative flex justify-between mb-4">
        <span className="absolute top-3 left-5">
          <CiSearch size={25} />
        </span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search employees"
          className="w-5/6 p-2 border rounded-full outline-none px-14"
        />
        <button
          onClick={() => setIsOpen((open) => !open)}
          className="px-8 py-3 text-white rounded-full bg-deepCyan"
        >
          + New Employee
        </button>
      </div>

      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-left">Employee</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">E-Mail</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Start Date</th>
            <th className="p-3 text-left">Active</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => (
            <EmployeRow key={employee.id} employee={employee} />
          ))}
        </tbody>
      </table>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default EmployeesTable;
