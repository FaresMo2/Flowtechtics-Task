import { useState } from "react";

function StatusCard({ employee }) {
  const { startDate, active } = employee;
  const [isActive, setIsActive] = useState(active);

  return (
    <div className="grid grid-cols-2 gap-6 mt-6">
      {/* Start Date */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="px-4 py-2 mb-4 text-lg font-bold rounded bg-gray-50">
          Date
        </h2>
        <div className="flex items-center gap-20 px-4 mt-4">
          <p className="font-semibold text-gray-400 text-md">Start Date</p>
          <p className="text-lg font-semibold">{startDate}</p>
        </div>
      </div>

      {/* Active Status */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="px-4 py-2 mb-4 text-lg font-bold rounded bg-gray-50">
          Active
        </h2>
        <div className="flex items-center gap-20 px-4 mt-4">
          <p className="font-semibold text-gray-400 text-md">Status</p>

          <label>
            <input
              type="checkbox"
              className="toggle-check"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.value)}
            />
            <div className="toggle-switch"></div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default StatusCard;
