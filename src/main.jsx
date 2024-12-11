import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import ContactUs from './components/ContactUs.jsx';
import './index.css'
import Howitwork from './components/Howitwork.jsx';
import Signup from "./components/Signup.jsx"
import Login from './components/Login.jsx';
import Navbar from './components/Navbar.jsx';
import Services from './components/Services.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <App/>,
  },
  {
    path: "/homeitwork",
    element: <Howitwork/>,
  },
  {
    path: "/contactUs",
    element: <ContactUs/>,
  },
  {
    
      path: "/services",
      element: <Services/>,
  
  },
  {
    path:"/sigup",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  
  {
    path:"/nav",
    element:<Navbar/>
  },
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)