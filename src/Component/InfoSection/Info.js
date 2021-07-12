import React from 'react';
import { Button } from 'react-scroll';
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

const Info = () => {
    return (
        <div>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                        <TextWrapper>
                            <TopLine>
                                TopLine
                            </TopLine>
                            <Heading>
                                    Heading
                                </Heading>
                                <SubTitle>
                                    SubTitle
                                </SubTitle>
                                <BtnWrapper>
                                    <Button/>
                                    
                                </BtnWrapper>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrapper>
                        <Image></Image>
                        </ImgWrapper>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </div>
    );
};

export default Info;