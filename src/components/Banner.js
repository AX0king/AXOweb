import { PromiseProvider } from "mongoose";
import React from "react";
import styled from "styled-components";
import Button from "./Button";


import img1 from '../assets/Nfts/Prototype1.jpg'
import img2 from '../assets/Nfts/Prototype2.jpg'
import img3 from '../assets/Nfts/Prototype3.jpg'
import img4 from '../assets/Nfts/Prototype4.jpg'

const Section = styled.section`
width: 100vw;
height: 25rem;
position: relative;
border-top: 2px solid #100c08 ;
border-bottom: 2px solid #100c08 ;

background-color: #100c08 ;

display: flex;
justify-content: center;
align-items: center;

overflow: hidden;

@media (max-width: 48em){
    height:15rem;
    flex-direction: column;
}
`

const ImgContainer = styled.div`
width: 100%;
position: absolute;
top: 50%;
left: 85%;
transform: translate(-50%, -50%);

dislplay: flex;
justify-content: center;
align-items: center;
opacity: 0.2;

img{
    width: 15%;
    height: 15%;
}
@media (max-width: 48em){
    img{
        width: 10rem;
        height: auto;
    }
}
`

const Title = styled.h1`
position: absolute;
witdh: 35%;
font-size: ${props => props.theme.fontxxxl};
color: white;
padding: 1rem 2rem;
z-index: 10;
text-transform: capitalize;

@media (max-width: 64em){
    top:0%;
    text-align: center;
    font-size: ${props => props.theme.fontxxl};
    width: 40%;
}
@media (max-width: 48em){
    top: 0%;
    padding: 2rem 0;
    font-size: ${props => props.theme.fontxl};
    width: 100%;
}

@media (max-width:90em){ 
    text-align:center;
}
@media (min-width:60em){ 
    right: 50%;
}
}
`

const BtnContainer = styled.div`
width: 35%;
justify-content: flex-end;
display: flex;


@media (max-width: 48em){
    width: 100%;
    justify-content:center;
}
`

const JoinNow = styled.button`
display: inline-block;
background-color: white;
color: black;
outline: none;
border: none;


font-size: ${props => props.theme.fontlg};
padding: 1.5rem 3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;

&:hover{
    transform: scale(0.97);
}


@media (max-width: 64em){
    bottom: -100%;
    justify-content:center;
}

@media (max-width: 48em){ 
    bottom: -70%;
    justify-content:center;
}

`

const Banner = () => {
    return (
        <Section>
            <ImgContainer>
                <img src={img1} alt="The Axos1"/>
                <img src={img2} alt="The Axos2"/>
                <img src={img3} alt="The Axos4"/>
                <img src={img4} alt="The Axos5"/>
            </ImgContainer>
            <Title>Join the <br /> AXOarmy</Title>
            <BtnContainer>
            <JoinNow>
            <Button text= "Join Now" link= "https://discord.gg/fZAcNNHU38" />
            </JoinNow>
            </BtnContainer>
        </Section>
    )
}

export default Banner