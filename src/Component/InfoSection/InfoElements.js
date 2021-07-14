import styled from "styled-components";

export const InfoContainer = styled.div`
color:#fff;
background-color:${({lightBg})=>(lightBg ? '#f9f9f9' : '#010606')};

@media screen and (max-width:760px){
    padding:60px 0px;
}
`
export const InfoWrapper = styled.div`

    z-index: 1;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 100px 24px 0px;

    width: 80%;
    margin: 0 auto;
    @media screen and (max-width:760px){
        padding:0px 0px;
    }
`
export const InfoRow = styled.div`
display:grid;
grid-auto-columns:minmax(auto, 1fr);
align-item:center;
 grid-template-areas:${({imgStart})=>(imgStart ? `'col2 col1'` : `'col1 col2'`)};
@media screen and (max-width:760px){
 grid-template-areas:${({imgStart})=>(imgStart ? `'col2' 'col1'` : `'col1 col1' 'col2 col2'`)};
}
`

export const Column1 = styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area:col1;
`
export const Column2 = styled.div`
margin-bottom:15px;
padding:0 15px;
grid-area:col2;
`
export const TextWrapper =styled.div`
max-width:540px;
padding-top:0;
padding-bottom:60px;
`


export const TopLine = styled.p`
color:#01BF71;
font-size:16px;
line-height:16px;
font-weight:700;
letter-spacing:1.4px;
tex-transform:uppercase;
margin-bottom:16px;
`
export const Heading=styled.h1`
font-size:48px;
line-height:1.1;
margin-bottom:20px;
font-weight:600;
color:${({lightText})=>(lightText ? '#f7f8fa' : '#010606')};

@media screen and (max-width:480px){
    font-size:32px;
}
`


export const SubTitle=styled.p`
max-width:440px;
font-size:18px;
line-height:24px;
color:${({darkText})=>(darkText ? '#010606' : '#ffff')};
margin-bottom:24px;
`

export const BtnWrapper = styled.div`
display:flex;
justify-content:flex-start;
`

export const ImgWrapper = styled.div`
max-width:555px;
height:100%;

`
export const Image =styled.img`
width:100%;
margin:0 0 10px 0;
padding-right:0;
`