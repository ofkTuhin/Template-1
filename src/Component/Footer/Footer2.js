import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {LowFooter,
    LowFooterWrapper,
    CopyWright,
    SocialLink,
    SocialWrapper,FooterLogo} from './FooterElements'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer2 = () => {
    return (
        <>
         <LowFooter>
              <LowFooterWrapper>
                  <FooterLogo>
                      dolla
                  </FooterLogo>
                  <CopyWright>
                  &copy; Copyright 2021 HTML.am


                  </CopyWright>
                  <SocialWrapper>
                      <SocialLink>
                         <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>

                      </SocialLink>
                      <SocialLink>

                          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>

                      </SocialLink>
                      <SocialLink>
                      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>

                      </SocialLink>
                      <SocialLink>
                      <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>

                      </SocialLink>
                  </SocialWrapper>
              </LowFooterWrapper>
              </LowFooter>
            
        </>
    );
};

export default Footer2;