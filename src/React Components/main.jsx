import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Invoices from './invoices.jsx';
import Compagny from './compagny.jsx';
import Contact from './contact.jsx';
import ErrorPage from './error-page.jsx';
import Login from './form/login.jsx';
import Signup from './form/sign-up.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/sign-up',
    element: <Signup />
  },
  {
    path: '/invoices',
    element: <Invoices />
  },
  {
    path: '/compagny',
    element: <Compagny />
  },
  {
    path: '/contact',
    element: <Contact />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
