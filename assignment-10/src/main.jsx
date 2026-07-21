import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  RouterProvider } from 'react-router-dom'
import Router from './app-router.jsx'
import Navbar from './componetns/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router} />
)
