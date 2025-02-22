import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/product/get-all`);
      console.log("API Response:", response.data.products);

      if (response.data && response.data.products) {
        const updatedProducts = response.data.products.map((product) => {
          let firstImageUrl = "https://via.placeholder.com/400x200"; // Default placeholder image
          if (Array.isArray(product.images) && product.images.length > 0) {
            firstImageUrl = product.images[0]; // Use first image from DB
          }
          return { ...product, imageUrl: firstImageUrl };
        });

        setProducts(updatedProducts);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  // Function to handle video play on hover
  const handleVideoPlay = (event) => {
    event.target.play();
  };

  // Function to handle video pause on hover out
  const handleVideoPause = (event) => {
    event.target.pause();
    event.target.currentTime = 0; // Reset video to the beginning
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-[#091D3E] mb-8 text-center">🛒 Our VR Business Cards</h2>
      
      <div className="space-y-8">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl hover:border-[#091D3E]"
            >
              {/* Product Hero Section */}
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                {/* Product Image or Video */}
                <div className="w-full md:w-48 h-48 relative">
                  {product.videos && product.videos.length > 0 ? (
                    <video
                      src={product.videos[0]}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                      muted
                      loop
                      onMouseEnter={handleVideoPlay}
                      onMouseLeave={handleVideoPause}
                    />
                  ) : (
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg shadow-md transform transition duration-300 hover:scale-105"
                    />
                  )}
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#091D3E]">{product.name}</h3>
                  <p className="text-lg text-gray-700 mt-2">{product.heading}</p>
                  <p className="text-gray-600 mt-2">{product.subDescription}</p>
                </div>
              </div>

              {/* Plans Section */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-[#091D3E] mb-4">Available Plans</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {product.plans.map((plan) => (
                    <div
                      key={plan._id}
                      className="bg-gray-50 p-4 rounded-lg border border-gray-200"
                    >
                      <h5 className="text-lg font-semibold text-[#091D3E]">{plan.name}</h5>
                      <p className="text-gray-700 mt-2">Price: {plan.price}</p>
                      <p className="text-gray-600 mt-1">Delivery: {plan.deliveryTime}</p>
                      <p className="text-gray-600 mt-1">Revisions: {plan.revisions}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews Section */}
              {product.reviews.length > 0 && (
                <div className="mt-8">
                  <h4 className="text-xl font-semibold text-[#091D3E] mb-4">Customer Reviews</h4>
                  <div className="space-y-4">
                    {product.reviews.map((review) => (
                      <div key={review._id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-700 font-semibold">{review.name}</p>
                        <p className="text-gray-600 mt-1">{review.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Call-to-Action Button */}
              <div className="mt-8 text-center">
                <Link
                  to={`/details/${product._id}`}
                  className="inline-block bg-[#091D3E] text-white text-lg font-medium py-2 px-6 rounded-md shadow-md transition duration-300 hover:bg-[#0A2A5A] hover:shadow-lg"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No products available.</p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;