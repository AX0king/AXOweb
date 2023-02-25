import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation, Autoplay, EffectCards } from "swiper";

import img1 from '../assets/Nfts/Prototype1.jpg'
import img2 from '../assets/Nfts/Prototype2.jpg'
import img3 from '../assets/Nfts/Prototype3.jpg'
import img4 from '../assets/Nfts/Prototype4.jpg'
import img5 from '../assets/Nfts/Prototype5.jpg'
import img6 from '../assets/Nfts/Prototype6.jpg'
import img7 from '../assets/Nfts/Prototype7.jpg'
import img8 from '../assets/Nfts/Prototype8.jpg'
import img9 from '../assets/Nfts/Prototype9.jpg'



const Container = styled.div`
width: 27vw;
height: 65vh;

@media (max-width: 70em){
    height: 60vh;
    width: 32vw;
}

@media (max-width: 64em){
    height: 55vh;
    width: 45vw;
}

@media (max-width: 48em){
    height: 50vh;
    width: 50vw;
}

@media (max-width: 30em){
    height: 45vh;
    width: 60vw;
}

.swiper{
    width: 100%;
    height: 100%;

}

.swiper-slide{
    background-color: ${props => props.theme.carouselColor};
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

}

img{
    height: 65vh;
    display: flex;
}

.swiper-button-next{
    color: black;
    right: 0;

    @media (max-width: 64em){
        width: 3rem;
    }
    
    @media (max-width: 30em){
        width: 2rem;
    }
}



.swiper-button-prev{
    color: black;
    right: 0;

    @media (max-width: 64em){
        width: 3rem;
    }
    
    @media (max-width: 30em){
        width: 2rem;
    }
}



.swiper-pagination{
    color: black; 
}
`

const Carousel = () => {
    return (
        <Container>
      <Swiper
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        pagination={{
            type:'fraction',

        }}
        scrollbar={{
            draggable: true
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt='AXO'/> </SwiperSlide>
        <SwiperSlide><img src={img2} alt='AXO2'/> </SwiperSlide>
        <SwiperSlide><img src={img3} alt='AXO3'/> </SwiperSlide>
        <SwiperSlide><img src={img4} alt='AXO4'/> </SwiperSlide>
        <SwiperSlide><img src={img5} alt='AXO5'/></SwiperSlide>
        <SwiperSlide><img src={img6} alt='AXO6'/></SwiperSlide>
        <SwiperSlide><img src={img7} alt='AXO7'/></SwiperSlide>
        <SwiperSlide><img src={img8} alt='AXO8'/></SwiperSlide>
        <SwiperSlide><img src={img9} alt='AXO9'/></SwiperSlide>
      </Swiper>
        </Container>
    )
}

export default Carousel