import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'
import Button from './Button'

const Title =  styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.text};
align-self: flex-start;


    span{
        text-transform: uppercase;
        font-family: 'Alef', cursive;
}
    .text-1{
        color: pink;
}
@media (max-width: 70em) {
    font-size: ${props => props.theme.fontxl};
}

@media (max-width: 48em) {
    align-self: center;
    text-align: center;

}

@media (max-width: 48em) {
    width: 90%;
}
`;

const SubTitle = styled.h3`
    font-size: ${props => props.theme.fontlg};
    text-transform: capitalize;
    color: white;
    font-weight: 600;
    margin-bottom: 1rem;
    width: 80%;
    align-self: flex-start;

    @media (max-width: 40em) {
        font-size: ${props => props.theme.fontmd};
    }

    
    @media (max-width: 48em) {
        align-self: center;
        text-align: center;
    }
    
`

const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;


@media (max-width: 48em) {
    align-self: center;
    text-align: center;
}
button {
    margin: 0 auto;
}
`

const TypeWriterText = () => {
    return (
<>
            <Title>
            Welcome to AXO 
            </Title>
    <SubTitle> Bored of only art? Join and play our game soon! </SubTitle>
    <ButtonContainer>
        <Button text= "Follow Us on twitter" link= "https://twitter.com/AXONFTs" />
    </ButtonContainer>
</>
    )
}

export default TypeWriterText