import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import{ Link as LinkS} from 'react-scroll'

export const Nav =styled.nav`
background: #000;
height: 80px;
display:flex;
justify-content:center;
align-items:center;
position:sticky;
top:0;
z-index:10;


@media screen nad(max-width:960px){
    transition: 0.8s all ease;
}
`


export const NavContainer=styled.div`
display:flex;
justify-content:space-between;
height:100%;
z-index:1;
width:100%;
max-width:1100px;
padding:0px 25px;
align-items:center;


`
export const NavLogo=styled(LinkR)`
color:white;
text-decoration:none;
margin-left:20px;
justify-self:start;
display:flex,
align-items:center;
font-weight:bold;



`

export const MobileIcons=styled.div`
display:none;
@media screen and (max-width:760px){
    display:block;
    position:absolute;
    
    right:30px;
    transform:translate(-100%.60%),
    cursor:pointer;
    font-size:1.8rem;
    color:white;
    cursor:pointer;
}

`
export const NavMenu=styled.ul`
display:flex;
align-items:center;
list-style:nome;
text-align:center;
margin-right:-22px;
@media screen and (max-width:760px)
{
    display:none;
}
`
export const NavItem=styled.li`
height:80px;
`
export const NavLink=styled(LinkS)`
display:flex;
align-items:center;
padding:0 16px;
height:100%;
text-decoration:none;
cursor:pointer;
color:#ffff;

&:active{
    border-bottom:3px solid #01BF71;

}
`
export const NavBtn =styled.nav`
display:flex;
align-items:center;

@media screen and (max-width:760px){
    display:none
}
`
export const NavBtnLink = styled(LinkR)`
border-radius:50px;
margin-right: 20px;
white-space:no-wrap;
padding:10px 15px;
transition:all 0.4s ease-in-out;
font-size:16px;
border:none;
background-color:#01BF71;
out-line:none;
color:white;
text-decoration:none;

&:hover{
background-color:white;
color:#01BF71
}

`
