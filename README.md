# Employee Management System (Mini ERP)

## Overview
This is a mini ERP system developed for managing employees. It includes a table displaying all employees, a multi-step form flow for adding new employees, and routes to view detailed data for each employee. The design is responsive, pixel-perfect, and follows best UI/UX practices.

## Key Features
- **Employee Table**: Displays a list of employees with links to detailed views.
- **Form Flow**: A multi-step form to add new employees (Personal Data, Image Upload, Preview).
- **Routing**: Each employee row links to a detailed employee view.
- **Responsive Design**: The layout is responsive and optimized for different screen sizes and devices.
- **Cross-browser Compatibility**: The system is tested and compatible with modern web browsers.
  

## Live Demo

You can view the live demo of the Employee Management System here: [Live Demo](https://flowtechtics-task.vercel.app/)


### Components

1. **EmployeeTable**
   - Displays the list of employees in a table format.
   - Each row links to a detailed view of the selected employee.

2. **FormSteps**
   - Renders the multi-step form navigation (Personal Data, Image, Preview).
   - Implements visual feedback (dashed lines between steps and focus indicators).

3. **ImageUpload**
   - Allows users to upload an image for the employee.
   - Includes a preview and a button to remove the image.

4. **EmployeeDetail**
   - Displays detailed information about a specific employee.

### Context

- **EmployeesContext**
  - Manages the state of employees and the current form step using the React context API.

### Pages

1. **Employees**
   - The main page that displays the employee table.

2. **AddEmployee**
   - The multi-step form for adding new employees (using `FormSteps` and `ImageUpload` components).

3. **EmployeeDetailPage**
   - A page to view detailed information about an individual employee, accessed by clicking a row in the employee table.

## How to Run the Project

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/employee-management-system.git
    ```

2. Navigate to the project directory:
    ```bash
    cd employee-management-system
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open the application in your browser at:
    ```bash
    http://localhost:3000
    ```

## Technologies Used
- React.js
- Tailwind CSS
- React Router
- Context API
- React Icons

## Future Improvements
- Add search and filtering functionality to the employee table.
- Include backend integration with an API for storing and retrieving employee data.
- Improve form validation and error handling.

## Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.

## License
This project is open-source and available under the [MIT License](LICENSE).



