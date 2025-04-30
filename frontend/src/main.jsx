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
import Signin from './pages/signin';

import OwnerDashboard from './pages/ownerDashboard';
import OwnerMngProperties from './pages/ownerMngProperties';
import OwnerMngPayments from './pages/ownerPayHistory';
import OwnerNotifications from './pages/ownerNotifications';
import OwnerDetails from './pages/ownerDetails';
import OwnerStats from './pages/ownerStats';

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
    path: "/signup",
    element: (
      <>
        <Signup />
      </>
    ),
  },
  {
    path: "/signin",
    element: (
      <>
        <Signin />
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
    path: "/ownerDashboard",
    element: (
      <>
        <OwnerDashboard />
      </>
    ),
  },
  {
    path: "/ownerMngProperties",
    element: (
      <>
        <OwnerMngProperties />
      </>
    ),
  },
  {
    path: "/ownerNotifications",
    element: (
      <>
        <OwnerNotifications />
      </>
    ),
  },
  {
    path: "/ownerDetails",
    element: (
      <>
        <OwnerDetails />
      </>
    ),
  },
  {
    path: "/ownerMngPayments",
    element: (
      <>
        <OwnerMngPayments />
      </>
    ),
  },
  {
    path: "/ownerStatistics",
    element: (
      <>
        <OwnerStats />
      </>
    ),
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
