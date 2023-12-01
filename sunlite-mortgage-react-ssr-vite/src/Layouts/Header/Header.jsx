import React from 'react';
import Topbar from '../Topbar/Topbar';
import NavigationBar from '../NavigationBar/NavigationBar'

const Header = () => {
    return (
        <div>
           <Topbar />
           <NavigationBar />  
        </div>
    );
};

export default Header;