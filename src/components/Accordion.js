import React from "react";
import { useState } from "react";
import styled from "styled-components";



const Container = styled.div`
cursor: pointer;
padding: 2rem 0.5rem;
display: flex;
flex-direction; column;
border-bottom: 2px solid white;
margin: 3rem 0;

@media (max-width: 48em){
margin: 2rem 0;
}
`

const Title = styled.div`
color: white;
font-size: ${props => props.theme.fontmd};
display: flex;
justify-content: space-between;
align-items: center;
position: absolute;
`

const Reveal = styled.div`
display: ${props => props.clicked ? 'block' : 'none'};
margin-top: 2.5rem;
color: grey;
font-size: ${props => props.theme.fontmd};
font-weight: 300;
line-height: 1rem;
`

const Name = styled.div`
display: flex;
align-items: center;
`

const Indicator = styled.span`
font-size: 1rem;
display: flex;
justify-content: center;
align-items: center;
margin-left: 10rem;
color: grey;


@media (max-width: 48em){
font-size: ${props => props.theme.fontxl};
    }
`



const Accordion = ({title, children}) => {
        const [collapse, setCollapse] = useState(false)
    return (
        <Container>
            <Title onClick={() => setCollapse(!collapse)}>
                <Name>
                    <span>{title}</span>
                </Name>
                {
                    collapse ?
                    <Indicator>-</Indicator> : <Indicator>+</Indicator>
                }
            </Title>
            <Reveal clicked={collapse}>
                {children}
            </Reveal>
        </Container>
    )
}

export default Accordion;
