import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import "@fontsource/alef"

const LogoText = styled.h1`
font-family: 'Alef';
font-size: ${props => props.theme.fontxxl};
color: ${props => props.theme.text};
transition: all 0.2s ease;
color: black;


&:hover{
    transform:scale(1.1);
}
`

const LogoFooter = () => {
    return (
        <LogoText>
            <Link to="/">
                AXO
            </Link>
        </LogoText>
    )
}

export default LogoFooter