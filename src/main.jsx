import './index.css';
import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import HomeSection from './componenets/HomeSection.jsx';
import ContactUs from './componenets/ContactUs.jsx';
import Services from './componenets/Services.jsx';
import Laravel from './componenets/Laravel.jsx';
import PHP from './componenets/PHP.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomeSection />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="services" element={<Services />} />
      <Route path="services/laravel" element={<Laravel />} />
      <Route path="services/php" element={<PHP />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
