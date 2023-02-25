import React from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: black;
position: relative;
`

const Title =  styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: white;
display: flex;
justify-content: center;
align-items: center;
margin: 0rem auto;
border-bottom: 3px solid white;
width: fit-content;

@media (max-width: 40em){
font-size: ${props => props.theme.fontxl};
}
`

const Container = styled.div`
width: 70%;
height: 200vh;
background-color: black;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;

@media (max-width: 64em){
width: 80%;
}
@media (max-width: 48em){
    width: 90%;
    }
`

const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

`

const Items = styled.ul`
list-style: none;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
// background-color: lightblue;

@media (max-width: 48em){
    width: 90%;
    }

&>*:nth-of-type(2n +1){
    justify-content: start;

    @media (max-width: 48em){
        justify-content:center;
        }

    div{
        border-radius: 50px 0 50px 0;
        text-align: right;

        @media (max-width: 48em){
            border-radius: 0 50px 0 50px ;
            text-align: left;

            p{
                border-radius:0 40px 0 40px; 
            }
        }
    }
    p{
        border-radius: 40px 0 40px 0;
    }
}

&>*:nth-of-type(2n){
    justify-content:end;

    @media (max-width: 48em){
        justify-content:center;
        }

    div{
        border-radius: 0 50px 0 50px ;
        text-align: left;
            }

    }
    p{
        border-radius: 0 40px 0 40px ;
    }
}
`

const Item = styled.li`
width: 100%;
height: 100%;
display: flex;

@media (max-width: 48em){
    justify-content: flex-end !important;
}
`

const ItemContainer = styled.div`
width: 40%;
height: fit-content;
padding: 1rem;
border: 3px solid white;

@media (max-width: 48em){
    width: 70%;
}
`

const Box = styled.p`
height: fit-content;
background-color: white;
color: balck;
padding: 1rem;
position: relative;
border: 2px solid white;
`

const SubTitle = styled.span`
display: block;
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: black;

@media (max-width: 40em){
    font-size: ${props => props.theme.fontlg};
    font-weight: 600;
    }
`;


const Text = styled.span`
display: block;
font-size: 1.5rem;
text-transform: capitalize;
color: black;

font-weight: 400;
margin: 0.5rem 0;

@media (max-width: 40em){
    font-size: ${props => props.theme.fontxs};
    }
`;

const RoadMapItem = ({title, subtext}) => {
    return(
        <Item>
            <ItemContainer>
                <Box>
                    <SubTitle> {title} </SubTitle>
                    <Text> {subtext} </Text>
                </Box>
            </ItemContainer>
        </Item>
    )
}

const Roadmap = () => {
    return (
        <Section id="roadmap">
            <Title>Roadmap</Title>
            <Container>
                <SvgContainer>
                    <DrawSvg />
                </SvgContainer>
                <Items>
                    <Item>&nbsp;</Item>
                    <RoadMapItem title = "Stage 1" subtext= "Develop a strong and trusted community. Launch our website and socials and host giveaways and collaborations for our members on Twitter and Discord.________More coming soon..." />
                    <RoadMapItem title = "Stage 2" subtext= "Release Our public mint each for 0.27 SOL. Donate 15% of the profit to charity and Amphibians research as well as develop Mini games for tournaments.________More coming soon..." />
                    <RoadMapItem title = "Stage 3" subtext= "Give access to holders for our Alpha calls as well as trading tips. Start AXO game development and early announcements to holders regarding the game.________More coming soon...." />
                    <RoadMapItem title = "Stage 4" subtext= "Have Beta Access to holders as well as Launch our exclusive merchandise for sale.________More coming soon..." />
                    <RoadMapItem title = "Stage 5" subtext= "Launch Our final game... Add some updates to the project & game.________More coming soon..." />
                </Items>
            </Container>
        </Section>
    )
}

export default Roadmap