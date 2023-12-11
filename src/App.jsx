import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import NoPage from './Pages/NoPage';
import ErrorPage from './Pages/ErrorPage';

const App = () => {
  return (
      <BrowserRouter>
        <nav>
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
          <NavLink to="/blogs" activeClassName="active">Blogs</NavLink>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </nav>

        <Routes>
          <Route path="/" exact element={<Layout><Home /></Layout>} />
          <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="*" element={<Layout><NoPage /></Layout>} />
          <Route path="error" element={<Layout><ErrorPage /></Layout>} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
