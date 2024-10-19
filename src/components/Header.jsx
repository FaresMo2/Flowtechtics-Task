import { LuMail } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";

function Header() {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow">
      <h1 className="text-2xl font-bold">Employees</h1>
      <div className="flex items-center space-x-4">
        <button className="relative flex items-center justify-center bg-gray-200 rounded-full w-9 h-9">
          <LuMail size={18} />
          <span className="absolute flex items-center justify-center w-6 h-6 text-xs text-white rounded-full bg-deepCyan -top-3 -right-3">
            3+
          </span>
        </button>
        <button className="relative flex items-center justify-center bg-gray-200 rounded-full w-9 h-9">
          <IoMdNotificationsOutline size={22} />
          <span className="absolute flex items-center justify-center w-6 h-6 text-xs text-white rounded-full bg-deepCyan -top-3 -right-3">
            9+
          </span>
        </button>
        <div className="flex items-center space-x-2">
          <img src="/user.jpg" alt="User" className="w-10 h-10 rounded-full" />
          <span className="font-semibold">Fares Mohamed</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
