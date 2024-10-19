import { useEmployees } from "../context/EmployeesContext";

function FormSteps() {
  const { currentStep } = useEmployees();

  return (
    <div className="flex items-center justify-between px-32 my-10">
      {/* Step 1 - Personal Data */}
      <div className="relative flex flex-col items-center gap-y-2">
        <span
          className={`inline-block w-8 h-8 rounded-full ${
            currentStep === 1
              ? "bg-deepCyan" // Active step background
              : "border-2 border-black bg-transparent" // Inactive steps border
          }`}
        ></span>
        <span
          className={`${currentStep === 1 ? "text-deepCyan" : "text-black"}`}
        >
          Personal Data
        </span>
        {/* Dashed line between steps */}
        <div className="absolute w-24 border-t-2 border-gray-400 border-dashed top-4 left-full"></div>
      </div>

      {/* Step 2 - Image */}
      <div className="relative flex flex-col items-center gap-y-2">
        <span
          className={`inline-block w-8 h-8 rounded-full ${
            currentStep === 2
              ? "bg-deepCyan" // Active step background
              : "border-2 border-black bg-transparent" // Inactive steps border
          }`}
        ></span>
        <span
          className={`${currentStep === 2 ? "text-deepCyan" : "text-black"}`}
        >
          Image
        </span>
        {/* Dashed line between steps */}
        <div className="absolute w-24 border-t-2 border-gray-400 border-dashed top-4 left-full"></div>
      </div>

      {/* Step 3 - Preview */}
      <div className="relative flex flex-col items-center gap-y-2">
        <span
          className={`inline-block w-8 h-8 rounded-full ${
            currentStep === 3
              ? "bg-deepCyan" // Active step background
              : "border-2 border-black bg-transparent" // Inactive steps border
          }`}
        ></span>
        <span
          className={`${currentStep === 3 ? "text-deepCyan" : "text-black"}`}
        >
          Preview
        </span>
      </div>
    </div>
  );
}

export default FormSteps;
