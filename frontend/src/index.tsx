import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from "./pages/login/LoginPage";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import RegisterPage from './pages/register/RegisterPage';
import CustomersPage from './pages/Customers/CustomersPage';
import TicketPage from './pages/ticket/TicketPage';
import TicketsPage from './pages/Tickets/TicketsPage';
import CustomerDetailPage from './pages/CustomerDetail/CustomerDetailPage';

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
  element:<CustomersPage />
},
{
  path: '/ticket',
  element: <TicketPage />
},
{
  path: '/tickets',
  element: <TicketsPage />
},
{
  path: '/customer/:customerId',
  element: <CustomerDetailPage />
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


