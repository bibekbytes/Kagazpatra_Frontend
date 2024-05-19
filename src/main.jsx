import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import DashBoard from './DashBoard.jsx';
import SignInComponent from './Components/SignInComponent.jsx';
import LoginComponent from './Components/LoginComponent.jsx';
import GovService from "./GovService.jsx";
import UniqueService from './UniqueService.jsx';
import GeneratedResult from './GeneratedResult.jsx';
import FormDocs from './FromDocs.jsx';
import ErrorComponent from './Components/ErrorComponent.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import { UserProvider } from './UserContext.jsx';
import { ToastContainer } from 'react-toastify';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: '/register',
        element: <SignInComponent />
      },
      {
        path: '/login',
        element: <LoginComponent />
      }],
    errorElement: <ErrorComponent />
  },
  {
    path: '/services',
    element: (<ProtectedRoute>
      <DashBoard />
    </ProtectedRoute>),
    children: [
      {
        index: true,
        element: <GovService />
      },
      {
        path: '/services/documents',
        element: <GovService />
      },
      {
        path: '/services/lekhapadhi',
        element: <UniqueService />,
        children: [
          {
            path: '/services/lekhapadhi',
            element: <FormDocs />
          },
          {
            path: '/services/lekhapadhi/generate',
            element: <GeneratedResult />
          }]
      },
      {
        path: "/services/kuruwa",
        element: <ErrorComponent />
      },
      {
        path: "/services/notary",
        element: <ErrorComponent />
      }]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={Router} />
    </UserProvider>
    <ToastContainer />
  </React.StrictMode>,
)
