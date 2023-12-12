import React from 'react';
import {BrowserRouter, NavLink} from 'react-router-dom';
import {Routes, Route} from "react-router-dom";
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
            <Layout>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/blogs" element={<Blogs/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<NoPage/>}/>
                    <Route path="error" element={<ErrorPage/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
