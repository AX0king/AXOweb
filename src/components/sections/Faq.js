import Accordion from '../Accordion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { useRef } from 'react';


const Section = styled.section`
min-height: 100vh;
width: 100w;
height: auto;
background-color: black;
position: relative;



display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Title =  styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: uppercase;
color: white;

border-bottom: 3px solid white;
margin: 0rem auto;
width: fit-content;

@media (max-width: 48em){
font-size: ${props => props.theme.fontxl};

}
`

const Container = styled.div`
width: 75%;
margin: 3rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
    width: 80%;
    }
@media (max-width: 48em){
        width: 90%;
        flex-direction: column;

        &>*:last-child{
            &>*:first-child{
                margin-top: 0;
            
            }
        }
    }
`
const Box =styled.div`
width: 45%;

@media (max-width: 64em){
    width: 90%;
    align-self:center;
    }
`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);

useLayoutEffect(() => {

    let element = ref.current; 

    ScrollTrigger.create({
        trigger: element,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
        scrub: true,
        // markers: true,
    })

    return () => {
        ScrollTrigger.kill();
    };


}, [])

    return (
        <Section ref={ref} id="faq">
            <Title>Faq</Title>
            <Container>
            <Box>
               <Accordion title="WHERE CAN I BUY AXO NFTS?">
                AXO NFTs will be available for mint in our site through a link, and the secondary market will be on Magic Eden.
               </Accordion>
               <Accordion title="WHAT PROJECT WILL THE PROJECT BE ON?">
                Solana.
               </Accordion>
               <Accordion title="WILL NON HOLDERS PLAY THE GAME?">
                No, they won't be able to play the game.
               </Accordion>
            </Box>
            <Box>
            <Accordion title="WHEN IS MINT DATE?">
                There is no date defined yet. Shouldn't be far away.
               </Accordion>
               <Accordion title="WILL WE HAVE A PRE-SALE?">
                Yes. You will be able to get an AXO for 0.17 SOL on presale, Which will be available for 1 hour only.
               </Accordion>
               <Accordion title="WHAT WILL BE MINT PRICE?">
                Mint price will be 0.27 SOL.
               </Accordion>

               
            </Box>
            </Container>
        </Section>
    )
}

export default Faq