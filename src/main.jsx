import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/product",
        element: <ProductDetail/>,
    },
    {
        path: "/cart",
        element: <Cart/>,
    },
  ]);
  
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)