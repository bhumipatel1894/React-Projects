import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Contact from './Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
let allRouts = createBrowserRouter(
  [
    {path: '/',
      element: <Home/>
    },
    {
      path: 'products',
      element: <Products/>
    },
    {
      path: 'contactus',
      element: <Contact/>
    }
  ]
)

root.render(
  <React.StrictMode>
    <RouterProvider router={allRouts}>
  
    </RouterProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
