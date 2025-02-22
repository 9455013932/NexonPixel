import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Avatar, Box, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./SideBar";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

const drawerWidth = 240; // Sidebar width

const AdminLayout = () => {
  const dispatch =useDispatch()
  const navigate=useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  // Open menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    handleMenuClose();
  
    Cookies.remove("authToken");
    Cookies.remove("user"); 
    dispatch(logout())
  
    // Redirect to login page
    navigate("/login");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Full Width Navbar */}
      <AppBar position="fixed" sx={{ backgroundColor: "#1976d2" }}>
        <Toolbar>
          {/* Logo & Title */}
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            {/* <MenuIcon />   */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Panel
          </Typography>

          {/* Profile Avatar & Dropdown */}
          <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
            <Avatar alt="Admin" src="/static/images/avatar.png" />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Sidebar & Content Section */}
      <Box sx={{ display: "flex", flexGrow: 1, mt: 8 }}>
        {/* Sidebar (Drawer) */}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box", mt: "64px" },
          }}
        >
          <Sidebar />
        </Drawer>

        {/* Main Content Area */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
