import { IoSettingsOutline } from "react-icons/io5";
import { PiChartPieSliceLight } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { PiUsersThreeLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";

// Sidebar.js
function Sidebar() {
  return (
    <div className="w-64 h-screen px-4 py-12 text-center bg-deepCyan">
      <div className="flex items-center w-1/2 gap-1 mx-auto my-8 text-white">
        <img src="/Group.png" className="w-16 " />
        <span>Dash</span>
      </div>
      <ul>
        <li className="py-3 transition duration-300 rounded-md">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 px-3 py-3 bg-white text-deepCyan rounded-md"
                : "flex items-center gap-2 px-3 py-3 rounded-md text-white hover:bg-white hover:text-deepCyan"
            }
          >
            <PiChartPieSliceLight size={20} /> Dashboard
          </NavLink>
        </li>
        <li className="w-full py-3 transition duration-300 rounded-md">
          <NavLink
            to="/team"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 px-3 py-3 bg-white text-deepCyan rounded-md"
                : "flex items-center gap-2 px-3 py-3 rounded-md text-white hover:bg-white hover:text-deepCyan"
            }
          >
            <PiUsersThreeLight size={25} />
            Teams
          </NavLink>
        </li>
        <li className="py-3 transition duration-300 rounded-md">
          <NavLink
            to="/employees"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 px-3 py-3 bg-white text-deepCyan rounded-md"
                : "flex items-center gap-2 px-3 py-3 rounded-md text-white hover:bg-white hover:text-deepCyan"
            }
          >
            <FaUsers size={20} /> Employees
          </NavLink>
        </li>
        <li className="py-3 transition duration-300 rounded-md">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 px-3 py-3 bg-white text-deepCyan rounded-md"
                : "flex items-center gap-2 px-3 py-3 rounded-md text-white hover:bg-white hover:text-deepCyan"
            }
          >
            <IoSettingsOutline size={20} /> Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
