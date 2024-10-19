import { useState } from "react";
import ImageUpload from "./ImageUpload";
import { TiDelete } from "react-icons/ti";
import { useEmployees } from "../context/EmployeesContext"; // Import the useEmployees hook
import FormSteps from "./FormSteps";

const MultiStepForm = () => {
  const { handleAddEmployees, setIsOpen } = useEmployees(); // Get handleAddEmployees from context
  const { currentStep, setCurrentStep } = useEmployees();
  const [formData, setFormData] = useState({
    name: "",
    startDate: "",
    role: "",
    email: "",
    phone: "",
    img: "", // Placeholder for image (if added)
  });

  // Handler for form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler to go to the next step
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // Handler to go to the previous step
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Submit handler for the form
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    handleAddEmployees({
      id: Date.now(), // Generating a unique ID for the new employee
      ...formData,
      active: true, // Default the new employee to active
    });
    // Reset the form and go back to step 1 after submitting
    setFormData({
      name: "",
      startDate: "",
      role: "",
      email: "",
      phone: "",
      img: "",
    });
    setCurrentStep(1);
  };

  // Function to render each step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalData formData={formData} handleChange={handleChange} />;
      case 2:
        return <ImageUpload formData={formData} setFormData={setFormData} />;
      case 3:
        return <Preview formData={formData} />;
      default:
        return <PersonalData formData={formData} handleChange={handleChange} />;
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"></div>

      <div className="absolute z-50 w-5/6 max-w-2xl mx-auto -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-xl top-1/2 left-1/2">
        <div className="flex items-center justify-between p-5 font-bold rounded-md shadow-lg">
          <h2 className="text-lg">Add New Employees</h2>
          <TiDelete
            size={25}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <FormSteps />

        {/* Form Element */}
        <form className="p-5 form-step" onSubmit={handleSubmit}>
          {renderStepContent()}

          <div className="flex justify-between mt-6">
            {currentStep > 1 && (
              <button
                className="flex items-center justify-center px-10 py-3 text-gray-500 border border-gray-500 rounded-full "
                type="button"
                onClick={prevStep}
              >
                Back
              </button>
            )}
            {currentStep < 3 && (
              <button
                className="flex items-center justify-center px-10 py-3 ml-auto text-white rounded-full bg-deepCyan"
                type="button"
                onClick={nextStep}
              >
                Next
              </button>
            )}
            {currentStep === 3 && (
              <button
                className="flex items-center justify-center px-10 py-3 ml-auto text-white rounded-full bg-deepCyan"
                type="submit"
              >
                Apply
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

// Personal Data Form Component
const PersonalData = ({ formData, handleChange }) => (
  <form className="space-y-3 px-7">
    <div>
      <label className="block mb-2 text-sm font-medium">Name*</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter Employee Name"
        className="w-full p-2 px-4 mb-4 border border-gray-300 rounded-full focus:outline-none"
      />
    </div>
    <div>
      <label className="block mb-2 text-sm font-medium">Start Date*</label>
      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        placeholder="Start Date"
        className="w-full p-2 px-4 mb-4 border border-gray-300 rounded-full focus:outline-none"
      />
    </div>
    <div>
      <label className="block mb-2 text-sm font-medium">Role*</label>
      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="w-full p-2 px-4 mb-4 border border-gray-300 rounded-full focus:outline-none"
      >
        <option value="">Select Role</option>
        <option value="IT">IT</option>
        <option value="Software">Software</option>
        <option value="Data Entry">Data Entry</option>
      </select>
    </div>
    <div>
      <label className="block mb-2 text-sm font-medium">E-Mail*</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter E-Mail"
        className="w-full p-2 px-4 mb-4 border border-gray-300 rounded-full focus:outline-none"
      />
    </div>
    <div>
      <label className="block mb-2 text-sm font-medium">Phone*</label>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter Phone Number"
        className="w-full p-2 px-4 mb-4 border border-gray-300 rounded-full focus:outline-none"
      />
    </div>
  </form>
);

// Preview Component
function Preview({ formData }) {
  return (
    <div className="min-h-full ">
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h3 className="px-4 py-2 mb-4 text-lg font-bold rounded bg-gray-50">
          Summary
        </h3>

        <div className="flex flex-col justify-center gap-y-5">
          <div className="flex items-center gap-x-48">
            <div className="text-gray-500">Employee</div>
            <div className="flex items-center -ml-3 gap-x-2">
              <img
                src={formData.img}
                alt="Employee"
                className="w-12 h-12 rounded-full"
              />
              <p className="text-sm font-medium">{formData.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-x-56">
            <div className="text-gray-500">Role</div>
            <p className="text-sm font-medium">{formData.role}</p>
          </div>
          <div className="flex items-center gap-x-52">
            <div className="text-gray-500">E-Mail</div>
            <p className="text-sm font-medium">{formData.email}</p>
          </div>
          <div className="flex items-center gap-x-52">
            <div className="text-gray-500">Phone</div>
            <p className="text-sm font-medium">{formData.phone}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {/* Start Date */}
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="px-4 py-2 mb-4 text-lg font-bold rounded bg-gray-50">
            Date
          </h2>
          <div className="flex items-center px-4 mt-4 gap-14">
            <p className="font-semibold text-gray-400 text-md">Start Date</p>
            <p className="text-lg font-semibold">{formData.startDate}</p>
          </div>
        </div>

        {/* Active Status */}
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="px-4 py-2 mb-4 text-lg font-bold rounded bg-gray-50">
            Active
          </h2>
          <div className="flex items-center gap-20 px-4 mt-4">
            <p className="font-semibold text-gray-400 text-md">Status</p>

            <label>
              <input
                type="checkbox"
                className="toggle-check"
                defaultChecked={false}
              />
              <div className="toggle-switch"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiStepForm;
