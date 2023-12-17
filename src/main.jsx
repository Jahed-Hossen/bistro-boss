import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './ROUTES/Router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import ArthProvider from './provider/ArthProvider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ArthProvider>
   <HelmetProvider>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
   </ArthProvider>

  </React.StrictMode>,
)
