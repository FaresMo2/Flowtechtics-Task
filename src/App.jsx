import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import EmployeesTable from "./components/EmployeesTable";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Team from "./pages/Team";
import SpecificEmployee from "./pages/SpecificEmployee";
import { EmployeesProvider } from "./context/EmployeesContext";

function App() {
  return (
    <EmployeesProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="team" element={<Team />} />
            <Route path="employees" element={<EmployeesTable />} />
            <Route path="employees/:id" element={<SpecificEmployee />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </EmployeesProvider>
  );
}

export default App;
