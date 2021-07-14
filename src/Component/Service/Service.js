import React, { useEffect, useState } from 'react';
import { ServiceContainer, ServiceWrapper,ServiceCard,ServiceH1,ServiceH2,ServiceImg,ServiceP} from './ServiceElements';
import { ServiceData } from './ServiceData';
const Service = () => {

   




    return (
        <>
          <ServiceContainer>
              <ServiceH1>
                  Our Service

              </ServiceH1>
              <ServiceWrapper>
              
            
                            
                

                      {
                          ServiceData.map(data=>{

                            return(
                                <ServiceCard> 
                                <ServiceImg src={data.img}>

                                </ServiceImg>
                                <ServiceH2>
                                    {data.h2}
                                   
              
                                </ServiceH2>
                                <ServiceP>
                                    {data.p}
              
                                </ServiceP>
                                </ServiceCard>
                            )
                          })
                      }
                 
                 
             

                    
                     
               
              </ServiceWrapper>
              </ServiceContainer>  
        </>
    );
};

export default Service;