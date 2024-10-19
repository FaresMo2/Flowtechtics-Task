import { useParams } from "react-router-dom";
import EmployeeSummary from "../components/EmployeeSummary";
import StatusCard from "../components/StatusCard";
import { useEmployees } from "../context/EmployeesContext";

function SpecificEmployee() {
  const { id } = useParams(); // Get the employee ID from the URL
  const { employees } = useEmployees(); // Get the list of employees

  // Find the employee by their ID
  const employee = employees.find((emp) => emp.id === parseInt(id));

  // Handle case where employee is not found
  if (!employee) {
    return <p>Employee not found</p>;
  }
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <EmployeeSummary employee={employee} />
      <StatusCard employee={employee} />
    </div>
  );
}

export default SpecificEmployee;
