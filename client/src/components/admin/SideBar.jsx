import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  ShoppingCart as ProductsIcon,
  AddCircle as AddProductIcon,
  ListAlt as ProductListIcon,
  Category as CategoriesIcon,
  Receipt as OrdersIcon,
  Assignment as OrderListIcon,
  SwapHoriz as ReturnsIcon,
  People as UsersIcon,
  Person as UserListIcon,
  Lock as RolesIcon,
  Inventory as InventoryIcon,
  Warehouse as WarehousesIcon,
  LocalOffer as CouponsIcon,
  Email as EmailCampaignsIcon,
  Description as PagesIcon,
  Book as BlogIcon,
  Analytics as AnalyticsIcon,
  BarChart as SalesReportsIcon,
  PieChart as ProductReportsIcon,
  Settings as SettingsIcon,
  Payment as PaymentMethodsIcon,
  LocalShipping as ShippingMethodsIcon,
  Build as GeneralSettingsIcon,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';

import { Link } from "react-router-dom";

const SideBar = () => {
  const [openProducts, setOpenProducts] = useState(false);
  const [openOrders, setOpenOrders] = useState(false);
  const [openUsers, setOpenUsers] = useState(false);
  const [openInventory, setOpenInventory] = useState(false);
  const [openMarketing, setOpenMarketing] = useState(false);
  const [openContent, setOpenContent] = useState(false);
  const [openAnalytics, setOpenAnalytics] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [openSlider, setOpenSlider] = useState(false);

  const handleClick = (menu) => {
    switch (menu) {
      case "products":
        setOpenProducts(!openProducts);
        break;
      case "orders":
        setOpenOrders(!openOrders);
        break;
      case "users":
        setOpenUsers(!openUsers);
        break;
      case "inventory":
        setOpenInventory(!openInventory);
        break;
      case "marketing":
        setOpenMarketing(!openMarketing);
        break;
      case "content":
        setOpenContent(!openContent);
        break;
      case "analytics":
        setOpenAnalytics(!openAnalytics);
        break;
      case "settings":
        setOpenSettings(!openSettings);
        break;
      default:
        break;
    }
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <List>
        {/* Dashboard */}
        <ListItem button component={Link} to="/admin/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        {/* Slider */}
        <ListItem button component={Link} to="/admin/slider">
          <ListItemIcon>
            <ViewCarouselIcon />
          </ListItemIcon>
          <ListItemText primary="Slider" />
        </ListItem>

        {/* Products */}
        <ListItem button onClick={() => handleClick("products")}>
          <ListItemIcon>
            <ProductsIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
          {openProducts ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openProducts} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/admin/products/add">
              <ListItemIcon>
                <AddProductIcon />
              </ListItemIcon>
              <ListItemText primary="Add Product" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/admin/products/list">
              <ListItemIcon>
                <ProductListIcon />
              </ListItemIcon>
              <ListItemText primary="Product List" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/admin/products/categories">
              <ListItemIcon>
                <CategoriesIcon />
              </ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItem>
          </List>
        </Collapse>

        {/* Orders */}
        <ListItem button onClick={() => handleClick("orders")}>
          <ListItemIcon>
            <OrdersIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
          {openOrders ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openOrders} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/admin/orders/list">
              <ListItemIcon>
                <OrderListIcon />
              </ListItemIcon>
              <ListItemText primary="Order List" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/admin/orders/returns">
              <ListItemIcon>
                <ReturnsIcon />
              </ListItemIcon>
              <ListItemText primary="Returns/Refunds" />
            </ListItem>
          </List>
        </Collapse>

        {/* Users */}
        <ListItem button onClick={() => handleClick("users")}>
          <ListItemIcon>
            <UsersIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
          {openUsers ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openUsers} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/admin/users/list">
              <ListItemIcon>
                <UserListIcon />
              </ListItemIcon>
              <ListItemText primary="User List" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/admin/users/roles">
              <ListItemIcon>
                <RolesIcon />
              </ListItemIcon>
              <ListItemText primary="Roles and Permissions" />
            </ListItem>
          </List>
        </Collapse>


        {/* Inventory */}
        <ListItem button onClick={() => handleClick("inventory")}>
          <ListItemIcon>
            <InventoryIcon />
          </ListItemIcon>
          <ListItemText primary="Inventory" />
          {openInventory ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openInventory} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/admin/inventory/stock">
              <ListItemIcon>
                <InventoryIcon />
              </ListItemIcon>
              <ListItemText primary="Stock Management" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/admin/inventory/warehouses">
              <ListItemIcon>
                <WarehousesIcon />
              </ListItemIcon>
              <ListItemText primary="Warehouses" />
            </ListItem>
          </List>
        </Collapse>

        {/* Marketing */}
        <ListItem button onClick={() => handleClick("marketing")}>
          <ListItemIcon>
            <CouponsIcon />
          </ListItemIcon>
          <ListItemText primary="Marketing" />
          {openMarketing ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openMarketing} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/admin/marketing/coupons">
              <ListItemIcon>
                <CouponsIcon />
              </ListItemIcon>
              <ListItemText primary="Coupons" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/admin/marketing/email">
              <ListItemIcon>
                <EmailCampaignsIcon />
              </ListItemIcon>
              <ListItemText primary="Email Campaigns" />
            </ListItem>
          </List>
        </Collapse>

        {/* Content */}
        <ListItem button onClick={() => handleClick("content")}>
          <ListItemIcon>
            <PagesIcon />
          </ListItemIcon>
          <ListItemText primary="Content" />
          {openContent ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openContent} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/admin/content/pages">
              <ListItemIcon>
                <PagesIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/admin/content/blog">
              <ListItemIcon>
                <BlogIcon />
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItem>
          </List>
        </Collapse>

        {/* Analytics */}
        <ListItem button onClick={() => handleClick("analytics")}>
          <ListItemIcon>
            <AnalyticsIcon />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
          {openAnalytics ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openAnalytics} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/admin/analytics/sales">
              <ListItemIcon>
                <SalesReportsIcon />
              </ListItemIcon>
              <ListItemText primary="Sales Reports" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/admin/analytics/products">
              <ListItemIcon>
                <ProductReportsIcon />
              </ListItemIcon>
              <ListItemText primary="Product Reports" />
            </ListItem>
          </List>
        </Collapse>

        {/* Settings */}
        <ListItem button onClick={() => handleClick("settings")}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
          {openSettings ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSettings} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/admin/settings/payment">
              <ListItemIcon>
                <PaymentMethodsIcon />
              </ListItemIcon>
              <ListItemText primary="Payment Methods" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/admin/settings/shipping">
              <ListItemIcon>
                <ShippingMethodsIcon />
              </ListItemIcon>
              <ListItemText primary="Shipping Methods" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }} component={Link} to="/admin/settings/general">
              <ListItemIcon>
                <GeneralSettingsIcon />
              </ListItemIcon>
              <ListItemText primary="General Settings" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default SideBar;