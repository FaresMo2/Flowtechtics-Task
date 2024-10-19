import { FaCheckCircle } from "react-icons/fa";
import { TfiTrash } from "react-icons/tfi";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useEmployees } from "../context/EmployeesContext";

function EmployeRow({ employee }) {
  const { handleDeleteEmployees } = useEmployees();

  return (
    <tr className="border-b hover:bg-gray-50">
      <Link to={`/employees/${employee.id}`}>
        <td className="flex items-center p-3">
          <img
            src={employee.img}
            alt="Avatar"
            className="w-8 h-8 mr-2 rounded-full"
          />
          {employee.name}
        </td>
      </Link>
      <td className="p-3">{employee.role}</td>
      <td className="p-3">{employee.email}</td>
      <td className="p-3">{employee.phone}</td>
      <td className="p-3">{employee.startDate}</td>
      <td className="p-3 ">
        {employee.active ? (
          <FaCheckCircle size={20} color="green" className="ml-4" />
        ) : (
          <TiDelete size={28} color="red" className="ml-3" />
        )}
      </td>
      <td className="p-3">
        <button
          className="ml-4 text-red-500"
          onClick={() => handleDeleteEmployees(employee.id)}
        >
          <TfiTrash size={20} color="gray" />
        </button>
      </td>
    </tr>
  );
}

export default EmployeRow;
