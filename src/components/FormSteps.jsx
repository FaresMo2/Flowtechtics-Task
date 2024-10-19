import { useEmployees } from "../context/EmployeesContext";

function FormSteps() {
  const { currentStep } = useEmployees();

  return (
    <div className="flex items-center justify-between px-32 my-10">
      {/* Step 1 - Personal Data */}
      <div
        className={`step flex flex-col items-center gap-y-2 ${
          currentStep === 1 ? "text-deepCyan" : "text-black"
        }`}
      >
        <span
          className={`inline-block w-8 h-8 rounded-full ${
            currentStep === 1
              ? "bg-deepCyan" // Active step background
              : "border-2 border-black bg-transparent" // Inactive steps border
          }`}
        ></span>
        <span>Personal Data</span>
      </div>

      {/* Step 2 - Image */}
      <div
        className={`step flex flex-col items-center gap-y-2 ${
          currentStep === 2 ? "text-deepCyan" : "text-black"
        }`}
      >
        <span
          className={`inline-block w-8 h-8 rounded-full ${
            currentStep === 2
              ? "bg-deepCyan" // Active step background
              : "border-2 border-black bg-transparent" // Inactive steps border
          }`}
        ></span>
        <span>Image</span>
      </div>

      {/* Step 3 - Preview */}
      <div
        className={`step flex flex-col items-center gap-y-2 ${
          currentStep === 3 ? "text-deepCyan" : "text-black"
        }`}
      >
        <span
          className={`inline-block w-8 h-8 rounded-full ${
            currentStep === 3
              ? "bg-deepCyan" // Active step background
              : "border-2 border-black bg-transparent" // Inactive steps border
          }`}
        ></span>
        <span>Preview</span>
      </div>
    </div>
  );
}

export default FormSteps;
