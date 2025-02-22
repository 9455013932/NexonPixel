import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';


import { fetchUser } from "./redux/authSlice";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
store.dispatch(fetchUser());

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <ToastContainer />
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
  </StrictMode>
);
