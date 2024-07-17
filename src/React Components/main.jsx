import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Invoices from './Invoices'
import Companies from './Companies'
import Contacts from './Contacts'
import {
        createBrowserRouter,
        RouterProvider,
    } from "react-router-dom";
    
        const router = createBrowserRouter([
            {
            path: "/",
            element: <App/>,
            // errorElement: <ErrorPage/>,
            },
            // {
            // path: "/signup",
            // element: <Register/>,
            // },
            // {
            // path: "/login",
            // element: <Login/>,
            // },
            // {
            // path: "/dashboard",
            // element: <DashBoard/>,
            // },
            {
            path: "/invoices",
            element: <Invoices/>,
            },
            {
            path: "/contacts",
            element: <Contacts/>,
            },
            {
            path: "/companies",
            element: <Companies/>,
            }
        ]);

    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
        <RouterProvider router={router} />
        <App/>
        </React.StrictMode>
    )