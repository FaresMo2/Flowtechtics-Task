import { useState } from "react";
import { FaImage } from "react-icons/fa"; // FontAwesome for image icon

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full p-6 rounded-md">
      <h2 className="mb-4 text-lg font-semibold text-gray-700">Add Image</h2>
      <div className="w-full px-6 py-10 text-center border-2 border-gray-300 border-dashed rounded-xl">
        {!preview ? (
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <div className="flex flex-col items-center">
              <FaImage className="mb-4 text-4xl text-deepCyan" />
              <span className="px-8 py-3 text-sm font-semibold text-white rounded-full bg-deepCyan">
                + Add image
              </span>
            </div>
          </label>
        ) : (
          <div className="flex flex-col items-center">
            <img
              src={preview}
              alt="Preview"
              className="object-cover w-40 h-40 mb-4 rounded-full"
            />
            <button
              className="px-4 py-2 text-white bg-red-500 rounded-full"
              onClick={() => {
                setImage(null);
                setPreview(null);
              }}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
