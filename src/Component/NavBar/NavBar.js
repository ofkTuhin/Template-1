import React from 'react';
import {FaBars} from 'react-icons/fa'
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
                            Home
                        </NavLink>
                        

                    </NavItem>
                    <NavItem>
                        <NavLink to='/home'>
                            Home
                        </NavLink>
                        

                    </NavItem>
                    <NavItem>
                        <NavLink to='home'>
                            Home
                        </NavLink>
                        

                    </NavItem>
                    <NavItem>
                        <NavLink to='home'>
                            Home
                        </NavLink>
                        

                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signIn">
                        Sign In
                        
                    </NavBtnLink>
                </NavBtn>
                </NavContainer>
            </Nav>
        </div>
    );
};

export default NavBar;