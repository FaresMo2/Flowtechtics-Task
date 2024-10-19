function EmployeeSummary({ employee }) {
  const { name, phone, role, email, img } = employee;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="px-4 py-2 mb-4 text-lg font-bold rounded bg-gray-50">
        Summary
      </h3>

      <div className="flex flex-col justify-center gap-y-5">
        <div className="flex items-center gap-x-48">
          <div className="text-gray-500">Employee</div>
          <div className="flex items-center gap-2 -ml-3">
            <img src={img} alt="Employee" className="w-12 h-12 rounded-full" />
            <p className="text-sm font-medium">{name}</p>
          </div>
        </div>
        <div className="flex items-center gap-x-56">
          <div className="text-gray-500">Role</div>
          <p className="text-sm font-medium">{role}</p>
        </div>
        <div className="flex items-center gap-x-52">
          <div className="text-gray-500">E-Mail</div>
          <p className="text-sm font-medium">{email}</p>
        </div>
        <div className="flex items-center gap-x-52">
          <div className="text-gray-500">Phone</div>
          <p className="text-sm font-medium">{phone}</p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeSummary;
