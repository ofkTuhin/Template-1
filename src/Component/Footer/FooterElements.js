import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
width:100%;
background:#010606;
padding:30px 0px;
`
export const FooterWrapper = styled.div`
width:80%;
margin:0px auto;
display:flex;
flex-wrap:wrap;
align-items: center;
justify-content:space-between;
@media screen and (max-width:760px){
    width:85%;
    
}
`
export const FooterLinkWrapper = styled.div`
width: 22%;
box-sizing: border-box;
padding: 0px 10px;
height: 200px;
@media screen and (max-width:760px){
    width:45%;
    width: 45%;
    margin-top: 20px;
    
}
`
 export const FooterLinkTitle = styled.h2`
 color:#f9f9f9;
 margin:10px 0px;
 font-size:24px;
 `
 export const FooterLinkContainer = styled.ul`
 display:block;
 padding:0px;
 `
 export const FooterLinkItem = styled.li`
 list-style:none;
 margin:10px 0px;

 `
 export const FooterLink = styled(Link)`
 text-decoration:none;
 color:#f9f9f9;

 `