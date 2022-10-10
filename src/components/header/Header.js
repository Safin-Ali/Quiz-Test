import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';

const Header = () => {
    return (
        <header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </header>
    );
};

export default Header;