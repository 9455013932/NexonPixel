import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HeroSection from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import AllProducts from "./pages/AllProducts";
import FrontendLayout from "./pages/layout/FrontendLayout";

function App() {

  return (
    <>
          <FrontendLayout>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HeroSection />} />
        <Route path="/aboutus" element={<AboutUs/>} />  
        <Route path="/contact" element={<Contact/>} />  
        <Route path="/products" element={<AllProducts/>} />  
        {/* <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} /> */}

        {/* Protected Routes for Users */}
        {/* <Route
          path="/dashboard"
          element={<PrivateRoute element={<Dashboard />} requiredRole="user" />}
        /> */}

        {/* Protected Routes for Admins */}

        {/* <Route path="/admin" element={<PrivateRoute requiredRole="admin">   <AdminLayout />  </PrivateRoute>}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />

        </Route> */}
      </Routes>
        </FrontendLayout>
    </>
  );
}

export default App;