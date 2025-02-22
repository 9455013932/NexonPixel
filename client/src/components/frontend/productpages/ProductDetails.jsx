// ProductDetails.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// If using the Razorpay package directly in the frontend, ensure it's installed:
// npm install razorpay
import Razorpay from "razorpay";

import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Paper,
  Divider
} from "@mui/material";
import PricingCard from "./PriceCard";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Fetch product details
  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/product/get-product/${id}`
      );
      if (response.data && response.data.product) {
        setProduct(response.data.product);
        if (response.data.product.plans.length > 0) {
          setSelectedPlan(response.data.product.plans[0]); // Default to first plan
        }
      } else {
        setProduct(null);
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  // Razorpay Payment Integration
  const handleBuyNow = async () => {
    if (!selectedPlan) return;

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
      amount: selectedPlan.price * 100, // Amount in paise (e.g., 1000 = ₹10)
      currency: "INR",
      name: "VR Business Cards",
      description: `Purchase ${selectedPlan.name} Plan`,
      image: "https://your-logo-url.com/logo.png", // Your logo URL
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        // Optionally send details to your backend for verification
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#091D3E",
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  };

  // Loading state
  if (loading) {
    return (
      <Typography align="center" color="text.secondary" sx={{ mt: 4 }}>
        Loading...
      </Typography>
    );
  }

  // Product not found
  if (!product) {
    return (
      <Typography align="center" color="text.secondary" sx={{ mt: 4 }}>
        Product not found.
      </Typography>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Left Column (Sticky Media Section) */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "sticky",
              top: 0,
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "start",
              py: 3,
              overflow: "auto",
            }}
          >
            {/* Main Image */}
            {product.images && product.images.length > 0 ? (
              <Box
                component="img"
                src={selectedImage || product.images[0]}
                alt={product.name}
                sx={{
                  width: "100%",
                  maxHeight: "60vh",
                  objectFit: "contain",
                  borderRadius: 2,
                  boxShadow: 3,
                  mb: 2,
                }}
              />
            ) : (
              <Paper
                variant="outlined"
                sx={{
                  width: "100%",
                  height: 300,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 2,
                  boxShadow: 3,
                  mb: 2,
                }}
              >
                <Typography color="text.secondary">No Image Available</Typography>
              </Paper>
            )}

            {/* Thumbnail Images */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 1,
                mb: 3,
              }}
            >
              {product.images.map((image, index) => (
                <Box
                  key={index}
                  component="img"
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setSelectedImage(image)}
                  sx={{
                    width: 64,
                    height: 64,
                    objectFit: "cover",
                    borderRadius: 1,
                    boxShadow: 3,
                    cursor: "pointer",
                    border:
                      selectedImage === image
                        ? "2px solid #1976d2"
                        : "2px solid transparent",
                  }}
                />
              ))}
            </Box>

            {/* Video Section */}
            {product.videos && product.videos.length > 0 && (
              <Box sx={{ width: "100%", mt: 3 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#091D3E", mb: 1 }}
                >
                  Product Video
                </Typography>
                <Box
                  component="video"
                  src={product.videos[0]}
                  controls
                  sx={{
                    width: "100%",
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </Box>
            )}
          </Box>
        </Grid>

        {/* Right Column (Details, Plans, Reviews) */}
        <Grid item xs={12} md={6}>
          <Box sx={{ maxHeight: "100vh", overflowY: "auto", py: 3 }}>
            {/* Product Name / Heading */}
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#091D3E", mb: 1 }}
            >
              {product.name}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
              {product.heading}
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              {product.description}
            </Typography>
            <Divider sx={{ mb: 3 }} />

            {/* Plans Section */}
           <PricingCard product={product} />

            {/* Reviews Section */}
            {product.reviews.length > 0 && (
              <Box sx={{ mt: 4 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#091D3E", mb: 2 }}
                >
                  Customer Reviews
                </Typography>
                {product.reviews.map((review) => (
                  <Paper
                    key={review._id}
                    variant="outlined"
                    sx={{ p: 2, mb: 2 }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, mb: 0.5 }}
                    >
                      {review.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {review.description}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
