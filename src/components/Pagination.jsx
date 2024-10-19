import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Pagination({ totalPages, currentPage, setCurrentPage }) {
  // Function to handle page changes
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex items-center justify-center mt-12 space-x-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className={`${
          currentPage === 1 ? "text-gray-300 cursor-not-allowed" : "text-black"
        } flex items-center justify-center w-8 h-8 border rounded-full`}
      >
        <IoIosArrowBack />
      </button>
      {/* Render page numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={`px-3 py-1 border rounded-full ${
            currentPage === index + 1 ? "text-deepCyan" : "text-gray-400"
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className={`${
          currentPage === totalPages
            ? "text-gray-300 cursor-not-allowed"
            : "text-black"
        } flex items-center justify-center w-8 h-8 border rounded-full`}
        disabled={currentPage === totalPages}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default Pagination;
