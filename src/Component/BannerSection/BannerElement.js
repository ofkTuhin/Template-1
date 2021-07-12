import styled  from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'

export const BannerContainer=styled.div`
background-color:#0c0c0c;
display:flex;
justify-content:center;
align-items:center;
padding:0px 30px;
position:relative;
z-index:1;
height:446px;
`

export const BannerBg = styled.div`
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
width:100%;
height:100%;
overflow:hidden;
`

export const VideoBg = styled.video`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:#232a34

`
export const BannerContent=styled.div`

max-width:95%;
z-index:3;
position:absolute;
padding:16px 24px;
display:flex;
flex-direction:column;
align-items:center;
`
export const BannerH1= styled.h1`
text-align:center;
font-size:48px;
color:#ffff;
@media screen and (max-width:760px){
    font-size:40px
};
@media screen and (max-width:480px){
    font-size:32px
}
`
export const BannerP=styled.p`

color:#ffff;
font-size:24px;
margin-top:24px;
text-align:center;
max-width:600px;

@media screen and (max-width:760px){
    font-size:20px
};
@media screen and (max-width:480px){
    font-size:18px
}

`

export const BannerBtnWrapper=styled.div`
display:flex;
margin-top:32px;
display:flex;
flex-direction:column;
align-items:center;

`

export const ArrowForward = styled(MdArrowForward)`
font-size: 32px;
margin-left:8px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
font-size: 32px;
margin-left:8px;
`