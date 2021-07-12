import React, { useState } from 'react';
import Banner from '../BannerSection/Banner';
import NavBar from '../NavBar/NavBar'
import SideBar from '../SideBar/SideBar'

const Home = () => {

        const [isOpen,setIsOpen]=useState(false) 
        const toggle=()=>{
            setIsOpen(!isOpen)
        }   
    return (
        <div>
            <SideBar isOpen={isOpen} toggle={toggle}></SideBar>
            <NavBar toggle={toggle}></NavBar>
            <Banner></Banner>
        </div>
    );
};

export default Home;