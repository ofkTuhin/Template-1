import styled from "styled-components";
import{ Link as LinkS} from 'react-scroll'

export const Button=styled(LinkS)`
border-radius:50px;
background:${({primary})=>(primary ? '#01BF71' : '#010606')};
padding:${({big})=> (big ? '15px 240px' : '10px 25px') };
color:${({dark})=>(dark ? '#010606' : '#ffff')};
white-space:nowrap;
out-line:none;
border:none;
display:flex;
align-items:center;
justify-content:center;
pointer:cursor;
font-size:${({fontBig})=>(fontBig ? '20px' : '16px')};
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    background:${({primary})=>(primary ? '#ffff' : '#01BF71')};
}
`