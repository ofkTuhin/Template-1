import React from 'react';
import { footerData } from './FooterData';


import { FooterContainer,
    FooterLink,
    FooterLinkContainer,
    FooterLinkItem,
    FooterLinkTitle,
    FooterLinkWrapper,
    FooterWrapper,
    
    
 }
  from './FooterElements';

const Footer = () => {
    return (
        <>
          <FooterContainer>
              <FooterWrapper>
                 {
                     footerData.map(data=>{
                         return(
                            <FooterLinkWrapper>
                            <FooterLinkTitle>
                                {
                                    data.title
                                }
      
                            </FooterLinkTitle>
                            <FooterLinkContainer>
                                {
                                    data.link.map(link=><FooterLinkItem>
                                        <FooterLink>{link}</FooterLink>
                                  
                                        </FooterLinkItem>)
                                }
                            </FooterLinkContainer>
                        </FooterLinkWrapper>
                         )
                     })
                 }
              </FooterWrapper>
             
              </FooterContainer> 
            
        </>
    );
};

export default Footer;