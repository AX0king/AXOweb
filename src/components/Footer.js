import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import Logo from './LogoFooter'
import Instagram from '../Icons/Instagram'
import Twitter from '../Icons/Twitter'

const Section = styled.section`
min-height: 100vh;
height: 100vh;
width: 100w;
background-color: white;
position: relative;



display: flex;
// justify-content: center;
// align-items: center; 
flex-direction: column;
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;

border-bottom: 1px solid black;
`

const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: black;
`

const IconList = styled.div`
display: flex;
align-items: center;
margin: 1rem auto;

&>*{
    padding-right: 0.5rem;
    transition: all 0.2 ease;

    &:hover{
        transform: scale(1.2);
    }
}
`

const MenuItems = styled.ul`
list-style: none;
width: 50%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grip-gap: 1rem;
`

const Item = styled.li`
width: fit-content;
cursor: pointer;

&::after{
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: black; 
    transition: width 0.3s ease;   
}

&:hover::after{
    width: 100%;
}
`



const Footer = () => {

    const scrollTo = (id) => {

        let element = document.getElementById(id)
    
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        })
    }
    
    return (
        <Section>
            <Banner />
            <Container>
                <Left>
                    <Logo />
                    <IconList>
                        <a href='https://twitter.com/AXONFTs' target='_blank'
                        rel="noopener">
                        <Twitter />
                        </a>
                    </IconList>
                </Left>
                <MenuItems>
                <Item onClick={() => scrollTo('home')} >Home</Item>
                    <Item onClick={() => scrollTo('about')} >About</Item>
                    <Item onClick={() => scrollTo('roadmap')}>Roadmap</Item>
                    <Item onClick={() => scrollTo('showcase')}>Showcase</Item>
                    <Item onClick={() => scrollTo('team')}>Team</Item>
                    <Item onClick={() => scrollTo('faq')}>Faq</Item>
                </MenuItems>
            </Container>
        </Section>
    )
}

export default Footer