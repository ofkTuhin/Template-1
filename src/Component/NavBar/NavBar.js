import React from 'react';
import {FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Nav,NavContainer, NavLogo,MobileIcons,NavItem,NavMenu,NavLink,NavBtn,NavBtnLink } from './NavElements';

const NavBar = ({toggle}) => {
    return (
        <div>
            <Nav>

                <NavContainer>
                <NavLogo>
                    <h1>dolla</h1>
                </NavLogo>
                <MobileIcons onClick={toggle}>
                    <FaBars/>
                </MobileIcons>
                <NavMenu>
                    
                    <NavItem>
                    
                       
                        <NavLink to='home'>
                          About 
                        </NavLink>
                       
                         </NavItem>
                    
                    <NavItem>
                        <NavLink to='home'>
                            Discover
                        </NavLink>
                        

                    </NavItem>
                    <NavItem>
                        <NavLink to='/home'>
                            Services
                        </NavLink>
                        

                    </NavItem>
                    <NavItem>
                        <NavLink to='/home'>
                            Sign in
                        </NavLink>
                        

                    </NavItem>
                    
                </NavMenu>
                
                <NavBtn>
               
                    <NavBtnLink to="/login">
                        Sign in
                        
                    </NavBtnLink>
                   
                
                </NavBtn>
                
                </NavContainer>
            </Nav>
        </div>
    );
};

export default NavBar;