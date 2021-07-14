import styled from "styled-components";

export const ServiceContainer=styled.div`
width:100%;
padding:100px 0px;
background:#010606;
text-align:center;
`
export const ServiceH1=styled.h1`
font-size:48px;
color:#ffff;
font-weight:600;
margin-bottom:30px;
@media screen and (max-width:760px){
    font-size:36px;
}
@media screen and (max-width:480px){
    font-size:32px;
}


`
export const ServiceWrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin:0px auto;
width:80%;
flex-wrap:wrap;
@media screen and (max-width:760px){
   


}
`
export const ServiceCard=styled.div`
    background: #ffff;
    border-radius: 10px;
    width: 30%;
    height: 300px;
    margin: 0px 10px;
    &:hover{
        transform:scale(1.02);
        transition:all 0.3s ease-in-out;
        cursor:pointer;
    };
@media screen and (max-width:760px){
    width: 100%;
    margin-top: 30px;
    padding: 20px;
}
`
export const ServiceImg=styled.img`
width:100%;
padding:15px;
height:115px;


`
export const ServiceH2 = styled.h2`

color: #010606;
    font-size: 26px;
    margin: 10px 0px;
@media screen and (max-width:760px){
    font-size:24px;
}
`
export const ServiceP = styled.p`
color: #010606;
    padding: 10px;
    font-size: 15px;
    margin: 0
`

