import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Home from './pages/home';
import AdminDashboard from './pages/adminDashboard';
import AdminDetails from './pages/adminDetails';
import AdminMngOwners from './pages/adminMngOwners';
import AdminManageProperties from './pages/adminMngProperties';
import AdminPayHistory from './pages/adminPayHistory';
import AdminStats from './pages/adminStats';
import AdminMngTenants from './pages/adminMngTenants';
import Signup from './pages/signup';


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
  { 
    path: "/adminStatistics",
    element: (
      <>
        <AdminStats />
      </>
    ),
  },
  { 
    path: "/adminMngTenants",
    element: (
      <>
        <AdminMngTenants />
      </>
    ),
  },
  { 
    path: "/adminMngOwners",
    element: (
      <>
        <AdminMngOwners />
      </>
    ),
  },
  { 
    path: "/signup",
    element: (
      <>
        <Signup />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
