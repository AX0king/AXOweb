import React from 'react'
import styled from 'styled-components'
import TypeWriterText from '../TypeWriterText'
import CoverVideo from '../CoverVideo'


const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})`}
width: 100vw;
position: relative;
background-color: black;
`

const Container = styled.div`
width: 80%;
min-height:89vh;
margin: 0 auto;
//background-color: lightblue; 

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 64em) {
    width: 85%;
}

@media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;
    

    &>*:first-child{
        width: 100%;
        margin-top: 2rem;

    }
}

`
const Box = styled.div`
width: 60%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


const Home = () => {
    return (
        <Section id="home">
            <Container>
                
            <Box> <TypeWriterText /> </Box>
            <Box> <CoverVideo /> </Box>     
            </Container>
        </Section>
    )
}

export default Home