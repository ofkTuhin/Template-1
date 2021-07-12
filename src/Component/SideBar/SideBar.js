import React from 'react';
import { SideBarContainer,Icon,CloseIcon,SideBarLink,SideBarWraper,SideBtn,SideBtnWrap,SideBarMenu} from './SideBrElements';

const SideBar = ({isOpen,toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>

            <SideBarWraper>
                <SideBarMenu>
                    <SideBarLink to='home'>
                        Home
                    </SideBarLink>
                    <SideBarLink to='home'>
                        Home
                    </SideBarLink>
                    <SideBarLink to='home'>
                        Home
                    </SideBarLink>
                    <SideBarLink to='home'>
                        Home
                    </SideBarLink>
                    <SideBarLink to='home'>
                        Home
                    </SideBarLink>

                </SideBarMenu>
                <SideBtnWrap>
                    <SideBtn to='/signIn'>Sign In</SideBtn>
                </SideBtnWrap>
            </SideBarWraper>
        </SideBarContainer>
    );
};

export default SideBar;