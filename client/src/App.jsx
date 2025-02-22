import React from "react";
import { Route, Routes } from "react-router-dom";
import HeroSection from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
// import AllProducts from "./pages/AllProducts";
import FrontendLayout from "./pages/layout/FrontendLayout";
import SignUp from "./components/frontend/Signup";
import Login from "./components/frontend/Login";
import Profile from "./components/user/Profile";
import Settings from "./components/user/Setting";
import PrivateRoute from "./components/PrivateRoutes";
import AdminDashBoard from "./components/admin/AdminDashBoard";
import AdminLayout from "./components/admin/AdminLayout";
import AddProduct from "./components/admin/product/AddProduct";
import AllProducts from "./components/frontend/productpages/AllProducts";
import ProductDetails from "./components/frontend/productpages/ProductDetails";

function App() {
  return (
    <>
      <Routes>
        {/* 🌍 Public Routes with Frontend Layout */}
        <Route
          path="/*"
          element={
            <FrontendLayout>
              <Routes>
                <Route path="/" element={<HeroSection />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<AllProducts />} />
                <Route path="/details/:id" element={<ProductDetails />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />

                {/* 👤 Protected Routes for Users */}
                <Route element={<PrivateRoute requiredRole="user" />}>
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/setting" element={<Settings />} />
                </Route>
              </Routes>
            </FrontendLayout>
          }
        />

        {/* 🔐 Protected Admin Routes (No Frontend Layout) */}
        <Route path="/admin/*" element={<PrivateRoute requiredRole="admin" />}>
          <Route path="" element={<AdminLayout />}>
            <Route index element={<AdminDashBoard />} />
            <Route path="dashboard" element={<AdminDashBoard />} />
            <Route path="products/add" element={<AddProduct />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
