import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Home from './pages/home';
import AdminDashboard from './pages/adminDashboard';
import AdminDetails from './pages/adminDetails';
import AdminManageOwners from './pages/adminMngOwners';
import AdminManageProperties from './pages/adminMngProperties';
import AdminPayHistory from './pages/adminPayHistory';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: "/adminDashboard",
    element: (
      <>
        <AdminDashboard />
      </>
    ),
  },
  {
    path: "/adminDetails",
    element: (
      <>
        <AdminDetails />
      </>
    ),
  },
  { 
    path: "/adminMngOwners",
    element: (
      <>
        <AdminManageOwners />
      </>
    ),
  },
  { 
    path: "/adminMngProperties",
    element: (
      <>
        <AdminManageProperties />
      </>
    ),
  },
  { 
    path: "/adminMngPayments",
    element: (
      <>
        <AdminPayHistory />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
