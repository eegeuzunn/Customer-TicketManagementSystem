import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from "./pages/login/LoginPage";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import RegisterPage from './pages/register/RegisterPage';
import CustomerPage from './pages/CustomersPage';
import TicketPage from './pages/ticket/TicketPage';

const router = createBrowserRouter([{
  path: '/',
  element: <LoginPage />
},
{
  path: '/register',
  element: <RegisterPage />
},
{
  path: '/customers',
  element:<CustomerPage />
},
{
  path: '/ticket',
  element: <TicketPage />
}

]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


