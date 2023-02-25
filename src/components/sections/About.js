import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Button from '../Button'
import Carousel from '../Carousel'
import {dark} from '../../styles/Themes'


const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: black;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

const Container = styled.div`
width: 80%;
margin: 0 auto;

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 70em){
    width: 85%;
}


@media (max-width: 64em){
    width: 100%;
    flex-direction: column;

    &>*:last-child{
        width: 80%;
    }
}

@media (max-width: 40em){

    &>*:last-child{
        width: 90%;
    }
}
`
const Box = styled.div`
width: 60%;
height: 100%;
min-height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;

@media (max-width: 40em){
    min-height: 50vh;
}

`
const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: white;
align-self: flex-start;
margin: 0 auto;

@media (max-width: 64em){
    width: 100%;
    text-align: center;
}
@media (max-width: 40em){
font-size: ${props => props.theme.fontxl};

}
@media (max-width: 30em){
    font-size: ${props => props.theme.fontlg};

}
`
const SubText = styled.p`
font-size: ${props => props.theme.fontlg};
width: 80%;
color: white;
align-self: flex-start;
margin: 1rem auto;
font-weight: 400;

@media (max-width: 64em){
    width: 100%;
    text-align: center;
font-size: ${props => props.theme.fontsm};

}
@media (max-width: 40em){
font-size: ${props => props.theme.fontsm};

}
@media (max-width: 30em){
    font-size: ${props => props.theme.fontxs};

}
`
const SubTextLight = styled.p`
font-size: 1.5rem;
width: 80%;
color: grey;
align-self: flex-start;
margin: 1rem auto;
font-weight: 400;

@media (max-width: 64em){
    width: 100%;
    text-align: center;
font-size: ${props => props.theme.fontsm};

}
@media (max-width: 40em){
font-size: ${props => props.theme.fontsm};

}
@media (max-width: 30em){
    font-size: ${props => props.theme.fontxs};

}
`
const ButtonContainer = styled.div`
width: 80%;
margin: 1rem auto
align-self: flex-start;
display: flex;


@media (max-width: 64em){
width: 100%;

button{
    margin: 0rem auto;
    }
}
`

const About = () => {
    return (
        <Section id="about">
            <Container>
                <Box> <Carousel /> </Box>
                <Box>
                    <Title>
                        Welcome To The AX0 Army.
                    </Title>
                    <SubText>
                        AXO is a collection of 3777 custom Axolotls that live in the Solana blockchain.
                        AXO NFTs will grant you access to our game "AXO" as soon as it is launched.

                        AXO will be a platformer game were you will be able to explore different worlds, build, craft and survive as well as earn!
                        More information regarding to the game soon! 
                    </SubText>
                    <SubTextLight>
                    Will you join the fight?
                    </SubTextLight>
                    <ButtonContainer>
                    <ThemeProvider theme={dark}></ThemeProvider>
                    <Button text= "Join our Discord" link="https://discord.gg/fZAcNNHU38" />
                    </ButtonContainer>
                </Box>
            </Container>
        </Section>
    )
}

export default About