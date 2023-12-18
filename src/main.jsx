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
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}> 
  <ArthProvider>
      <HelmetProvider>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
   </ArthProvider>
</QueryClientProvider>
  </React.StrictMode>,
)
