// main.jsx (ou index.jsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './Home.jsx';
import Invoices from './Invoices.jsx';
import Compagny from './Compagny.jsx';
import Contact from './Contact.jsx';
import ErrorPage from './ErrorPage.jsx';
import Login from './form/Login.jsx';
import Signup from './form/Signup.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/invoices',
        element: <Invoices />,
      },
      {
        path: '/compagny',
        element: <Compagny />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/sign-up',
        element: <Signup />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
