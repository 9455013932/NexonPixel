import axios from "axios";
import { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    heading: "",
    subDescription: "",
    description: "",
    plans: [
      { name: "Basic", price: "", deliveryTime: "", revisions: "", features: "" },
      { name: "Standard", price: "", deliveryTime: "", revisions: "", features: "" },
      { name: "Premium", price: "", deliveryTime: "", revisions: "", features: "" },
    ],
    reviews: [],
    images: [],
    videos: [],
  });

  const handleFileChange = (event, type) => {
    const files = Array.from(event.target.files);
    setFormData((prev) => ({
      ...prev,
      [type]: [...prev[type], ...files],
    }));
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleAddReview = () => {
    setFormData({
      ...formData,
      reviews: [...formData.reviews, { name: "", description: "", video: null }],
    });
  };

  const handleReviewChange = (index, field, value) => {
    const updatedReviews = [...formData.reviews];
    updatedReviews[index][field] = value;
    setFormData({ ...formData, reviews: updatedReviews });
  };

  const handleReviewFileChange = (index, e) => {
    const updatedReviews = [...formData.reviews];
    updatedReviews[index].video = e.target.files[0];
    setFormData({ ...formData, reviews: updatedReviews });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();

    // Append text fields
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value) && key !== "images" && key !== "videos") {
        form.append(key, JSON.stringify(value));
      } else if (typeof value === "string") {
        form.append(key, value);
      }
    });

    // Append images
    formData.images.forEach((image, index) => {
      form.append(`images`, image);
    });

    // Append videos
    formData.videos.forEach((video, index) => {
      form.append(`videos`, video);
    });

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/product/add`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 201) {
        alert("Product added successfully!");
      } else {
        alert("Error adding product.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding product.");
    }
  };


  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Add Product</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              className="input-field"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Heading</label>
            <input
              type="text"
              name="heading"
              placeholder="Enter heading"
              className="input-field"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label className="block font-medium text-gray-700">Sub Description</label>
          <textarea
            name="subDescription"
            placeholder="Enter sub description"
            className="input-field"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            placeholder="Enter product description"
            className="input-field"
            onChange={handleInputChange}
          />
        </div>

        {/* Pricing Plans */}
        <div className="border-t border-gray-300 pt-4">
          <h3 className="text-lg font-semibold text-gray-800">Pricing Plans</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {formData.plans.map((plan, index) => (
              <div key={index} className="border p-4 rounded-md">
                <h4 className="font-medium text-gray-700">{plan.name} Plan</h4>
                <input
                  type="text"
                  placeholder="Price"
                  className="input-field mt-2"
                  onChange={(e) => {
                    const updatedPlans = [...formData.plans];
                    updatedPlans[index].price = e.target.value;
                    setFormData({ ...formData, plans: updatedPlans });
                  }}
                />
                <input
                  type="text"
                  placeholder="Delivery Time"
                  className="input-field mt-2"
                  onChange={(e) => {
                    const updatedPlans = [...formData.plans];
                    updatedPlans[index].deliveryTime = e.target.value;
                    setFormData({ ...formData, plans: updatedPlans });
                  }}
                />
                <input
                  type="text"
                  placeholder="Revisions"
                  className="input-field mt-2"
                  onChange={(e) => {
                    const updatedPlans = [...formData.plans];
                    updatedPlans[index].revisions = e.target.value;
                    setFormData({ ...formData, plans: updatedPlans });
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* File Uploads */}
        <div className="border-t border-gray-300 pt-4">
          <h3 className="text-lg font-semibold text-gray-800">Media Upload</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Image Upload */}
            <div>
              <label className="block font-medium text-gray-700">Upload Images</label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => handleFileChange(e, "images")}
                className="mt-2 block w-full"
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.images.map((file, index) => (
                  <img key={index} src={URL.createObjectURL(file)} alt="Preview" className="w-20 h-20 rounded-md" />
                ))}
              </div>
              <button
                type="button"
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={() => document.getElementById("imageUpload").click()}
              >
                Add More Images
              </button>
              <input
                id="imageUpload"
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => handleFileChange(e, "images")}
                className="hidden"
              />
            </div>

            {/* Video Upload */}
            <div>
              <label className="block font-medium text-gray-700">Upload Videos</label>
              <input
                type="file"
                multiple
                accept="video/*"
                onChange={(e) => handleFileChange(e, "videos")}
                className="mt-2 block w-full"
              />
              <div className="mt-2">
                {formData.videos.map((file, index) => (
                  <video key={index} src={URL.createObjectURL(file)} controls className="w-40 h-24"></video>
                ))}
              </div>
              <button
                type="button"
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={() => document.getElementById("videoUpload").click()}
              >
                Add More Videos
              </button>
              <input
                id="videoUpload"
                type="file"
                multiple
                accept="video/*"
                onChange={(e) => handleFileChange(e, "videos")}
                className="hidden"
              />
            </div>
          </div>
        </div>

        {/* Review Section */}
        <div className="border-t border-gray-300 pt-4">
          <h3 className="text-lg font-semibold text-gray-800">Customer Reviews</h3>
          {formData.reviews.map((review, index) => (
            <div key={index} className="border p-4 rounded-md mb-4">
              <input
                type="text"
                placeholder="Reviewer Name"
                className="input-field"
                onChange={(e) => handleReviewChange(index, "name", e.target.value)}
              />
              <textarea
                placeholder="Review Description"
                className="input-field mt-2"
                onChange={(e) => handleReviewChange(index, "description", e.target.value)}
              />
              <input
                type="file"
                onChange={(e) => handleReviewFileChange(index, e)}
                className="mt-2 block w-full text-sm text-gray-500"
              />
            </div>
          ))}
          <button
            type="button"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md"
            onClick={handleAddReview}
          >
            Add Review
          </button>
        </div>
        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
          >
            Submit Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
