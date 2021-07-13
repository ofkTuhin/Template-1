import React from 'react';
import { Button } from '../Button/ButtonElements'
// import img1 from '../../images/img4.svg'

import { ImgWrapper,
    
    Image,
    InfoContainer,
    InfoRow,
    InfoWrapper,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    BtnWrapper,SubTitle } from './InfoElements';

const Info = ({
    id,
    lightBg,
    topLine,
    heading,
    imgStart,
    darkText,
    lightText,
    primary,
    dark,
    description,
    btnLevel,
    img,
    alt
    
}) => {
    return (
        <div>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>
                                {topLine}
                            </TopLine>
                            <Heading lightText={lightText}>
                                    {heading}
                                </Heading>
                                <SubTitle darkText={darkText}>
                                    {description}
                                </SubTitle>
                                <BtnWrapper>
                                    <Button 
                                    primary={primary ? 1:0}
                                    dark={dark ? 1: 0}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    
                                    >
                                        {btnLevel}
                                    </Button>
                                    
                                </BtnWrapper>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrapper>
                        <Image src={img} alt={alt}></Image>
                        </ImgWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </div>
    );
};

export default Info;