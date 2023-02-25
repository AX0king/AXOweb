import React from 'react'
import styled from 'styled-components';


import img1 from '../../assets/Nfts/Prototype9.jpg'
import img2 from '../../assets/Nfts/Prototype8.jpg'
import img3 from '../../assets/Nfts/Prototype7.jpg'
import img4 from '../../assets/Nfts/Prototype3.jpg'
import img5 from '../../assets/Nfts/Prototype4.jpg'

const Section = styled.section`
min-height: 100vh;
width: 100vw;
color: black;
background-color: black;
position: relative;
`

const Title =  styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: white;
display: flex;
justify-content: center;
padding-top: 3rem;
align-items: center;
margin: 0rem auto;
border-bottom: 3px solid white;
width: fit-content;

@media (max-width: 40em){
font-size: ${props => props.theme.fontxl};
}
`

const Container = styled.div`
color: white;
width: 80%;
margin: 7rem auto;



display: flex;
justify-content: space-around; 
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em){
    width: 85%;
}

@media (max-width: 40em){
    width: 90%;
    justify-content: center;

}
`

const ImageContainer = styled.div`
width: 80%;
margin: 0 auto;
background-color: none;
border: 1px solid white;
border-radius: 20px;
padding: 1rem;


img{
    width: 100%;
    border-radius: 20px;
    height: auto;
    transition: all 0.3s ease;
}
`

const Name = styled.h2`
font-size: ${props => props.theme.fontgl};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: white;
margin-top: 1rem;
`

const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: grey;
font-wegith: 400;
`


const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
color: black;
margin: 2rem 2rem;
position: relative;
cursor: pointer;


border:2px solid white;
border-radius: 20px;


&:hover{
    img{
        transform: translateY(-0.5rem) scale(1);
    }
}

@media (max-width: 64em){
    width: 70vw;
}
`

const MemberComponent = ({img, name=" ",position=" "}) => {

    return(
        <Item>
            <ImageContainer>
                <img src={img} alt={name} />
            </ImageContainer>
            <Name>{name}</Name>
            <Position>{position}</Position>
        </Item>
    )
}

const Team = () => {
    return (
        <Section id="team">
            <Title>Team</Title>
            <Container>
                <MemberComponent img={img1}  name="AXO" position="Founder / Developer"/>
                <MemberComponent img={img4}  name="AXOLoyalist" position="Co-Founder"/>
                <MemberComponent img={img5}  name="Captain Strudel" position="Marketing Manager"/>
                <MemberComponent img={img2}  name="Astro Orbis" position="Discord server Moderator"/>
                <MemberComponent img={img3}  name="Mr noodle" position="Discord server Moderator"/>
            </Container>
        </Section>
    )
}

export default Team