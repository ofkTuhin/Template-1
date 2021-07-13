import React, { useState } from 'react';
import Banner from '../BannerSection/Banner';
import Info from '../InfoSection/Info';
import { InfoData, InfoData2, InfoData3 } from '../InfoSection/InfoData';
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
            <Info {...InfoData}></Info>
            <Info {...InfoData2}></Info>
            <Info {...InfoData3}></Info>
        </div>
    );
};

export default Home;