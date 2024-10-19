import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useEmployees } from "../context/EmployeesContext";
import MultiStepForm from "../components/MultiStepForm";

function AppLayout() {
  const { isOpen } = useEmployees();
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <Outlet />
        {isOpen && <MultiStepForm />}
      </div>
    </div>
  );
}

export default AppLayout;
