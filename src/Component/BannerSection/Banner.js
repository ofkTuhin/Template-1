import React, { useState } from 'react';
import { BannerBg, BannerContainer, VideoBg,BannerBtnWrapper,BannerContent,BannerH1,BannerP,ArrowForward,ArrowRight} from './BannerElement';
import video from '../../video/video.mp4'
import { Button } from '../Button/ButtonElements';
import { Link } from 'react-router-dom';

const Banner = () => {
    const [hover,setHover]=useState(false)
    const onHover=()=>{
        setHover(!hover)
    }
    return (
        <>
          <BannerContainer>
              <BannerBg>
                  <VideoBg src={video} loop muted autoPlay type='video/mp4'></VideoBg>
              </BannerBg>

              <BannerContent>
              <BannerH1>Virtual Banking Made Easy</BannerH1>
              <BannerP>Sign for new account for today and receive $250 in credit towards your next payment.

              </BannerP>
              <BannerBtnWrapper>
                 <Button onMouseEnter={onHover} onMouseLeave={onHover} primary dark> Get started {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
              </BannerBtnWrapper>
              </BannerContent>
              </BannerContainer>  
        </>
    );
};

export default Banner;