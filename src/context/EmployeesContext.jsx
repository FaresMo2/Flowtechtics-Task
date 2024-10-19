import { createContext, useContext, useState } from "react";

const EmployeesContext = createContext();

const employeesData = [
  {
    id: 1,
    name: "Fares Mohamed",
    img: "/user.jpg",
    role: "Frontend Developer",
    email: "example@gmail.com",
    phone: "01315485481",
    startDate: "25/12/2024",
    active: true,
  },
  {
    id: 2,
    name: "Radwan Elbrens",
    img: "/user.jpg",
    role: "Software",
    email: "example@gmail.com",
    phone: "01315485481",
    startDate: "25/12/2024",
    active: false,
  },
  {
    id: 3,
    name: "Soha Yassin",
    img: "/user.jpg",
    role: "Graphic Designer",
    email: "example@gmail.com",
    phone: "01315485481",
    startDate: "25/12/2024",
    active: true,
  },

  {
    id: 4,
    name: "Khalid Hassan",
    img: "/user.jpg",
    role: "IT",
    email: "example@gmail.com",
    phone: "01315485481",
    startDate: "25/12/2024",
    active: true,
  },
  {
    id: 5,
    name: "Mahdy Khalid",
    img: "/user.jpg",
    role: "IT",
    email: "example@gmail.com",
    phone: "01315485481",
    startDate: "25/12/2024",
    active: true,
  },
  {
    id: 6,
    name: "Shahd Tarek",
    img: "/user.jpg",
    role: "Graphic Designer",
    email: "example@gmail.com",
    phone: "01315485481",
    startDate: "25/12/2024",
    active: true,
  },
  {
    id: 7,
    name: "Ahmed Ali",
    img: "/user.jpg",
    role: "IT",
    email: "example@gmail.com",
    phone: "01315485481",
    startDate: "25/12/2024",
    active: true,
  },
  {
    id: 8,
    name: "Ahmed Ali",
    img: "/user.jpg",
    role: "IT",
    email: "example@gmail.com",
    phone: "01315485481",
    startDate: "25/12/2024",
    active: true,
  },
  {
    id: 9,
    name: "Ahmed Ali",
    img: "/user.jpg",
    role: "IT",
    email: "example@gmail.com",
    phone: "01315485481",
    startDate: "25/12/2024",
    active: true,
  },
  {
    id: 10,
    name: "Ahmed Ali",
    img: "/user.jpg",
    role: "IT",
    email: "example@gmail.com",
    phone: "01315485481",
    startDate: "25/12/2024",
    active: true,
  },
  {
    id: 11,
    name: "Ahmed Ali",
    img: "/user.jpg",
    role: "IT",
    email: "example@gmail.com",
    phone: "01315485481",
    startDate: "25/12/2024",
    active: true,
  },
];

function EmployeesProvider({ children }) {
  const [employees, setEmployees] = useState(employeesData);
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    startDate: "",
    role: "",
    email: "",
    phone: "",
    img: "", // Image field in formData
  });

  function handleAddEmployees(employee) {
    setEmployees((employees) => [...employees, employee]);
  }

  function handleDeleteEmployees(id) {
    setEmployees((employees) =>
      employees.filter((employee) => employee.id !== id)
    );
  }

  return (
    <EmployeesContext.Provider
      value={{
        isOpen,
        setIsOpen,
        employees,
        handleAddEmployees,
        handleDeleteEmployees,
        currentStep,
        setCurrentStep,
        formData,
        setFormData,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
}

function useEmployees() {
  const context = useContext(EmployeesContext);

  if (context === undefined)
    throw new Error("EmployeesContext was used out of the EmployeesProvider");

  return context;
}

export { EmployeesProvider, useEmployees };
