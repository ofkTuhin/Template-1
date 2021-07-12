import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import{ Link as LinkS} from 'react-scroll'
import { FaTimes } from 'react-icons/fa'

export const SideBarContainer = styled.aside`

position:fixed;
display:grid;
height:100%;
width:100%;
align-items:center;
top:0;
left:0;
transition:0.3s ease-in-out;
background:#0d0d0d;
z-index:999;
opacity:${({isOpen})=>(isOpen ? '100%' : '0')};
top:${({isOpen})=>(isOpen ? '0' : '-100%')}

`

export const CloseIcon= styled(FaTimes)`
color:#ffff
`
export const Icon =styled.div`
position:absolute;
top:1.5rem;
right:1.5rem;
background:transparent;
font-size:32px;
out-line:0;
cursor:pointer;
`
export const SideBarWraper=styled.div`
color:#ffff
`
export const SideBarMenu=styled.ul`
display:grid;
grid-template-columns:1fr;
grid-template-rows: repeat(5, 80px);
text-align:center;
@media screen and (max-width:460px){
    grid-template-rows: repeat(6, 60px); 
}
`
 export const SideBarLink =styled(LinkS)`
 display:flex;
 align-items:center;
 justifY-content:center;
 text-decoration:none;
 list-style:none;
 transition:0.4s ease-in-out;
font-size:24px;
color:white;
cursor:pointer;
&:hover{
    color:#01bf71;
    transition:0.4s ease-in-out;


}
 
 `
 export const SideBtnWrap = styled.div`
 display:flex;
align-items:center;
justify-content:center;
 `
 export const SideBtn=styled(LinkR)`
 
 border-radius:50px;
white-space:no-wrap;
padding:16px 64px;
transition:all 0.4s ease-in-out;
font-size:16px;
border:none;
background-color:#00FF00;
out-line:none;
color:white;
text-decoration:none;
margin-left:40px;

&:hover{
background-color:white;
color:#00FF00;
transition:all 0.4s ease-in-out;
}

 `