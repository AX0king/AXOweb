import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'


import img1 from '../../assets/Nfts/Prototype1.jpg'
import img2 from '../../assets/Nfts/Prototype2.jpg'
import img3 from '../../assets/Nfts/Prototype3.jpg'
import img4 from '../../assets/Nfts/Prototype4.jpg'
import img5 from '../../assets/Nfts/Prototype5.jpg'
import img6 from '../../assets/Nfts/Prototype6.jpg'
import img7 from '../../assets/Nfts/Prototype7.jpg'
import img8 from '../../assets/Nfts/Prototype8.jpg'
import img9 from '../../assets/Nfts/Prototype9.jpg'




import sol from '../../assets/Nfts/SOL.jpg'

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;


&>*:first-child{
    animation-duration: 20s;

    @media (max-width: 64em){
    animation-duration: 15s;
    }
}
&>*:last-child{
    animation-duration: 15s;
    
    @media (max-width: 64em){
        animation-duration: 10s;
        }
}

`
const move = keyframes`
0%{ transform: translateX(100%) };
100%{ transform: translateX(-100%) }
`


const Row = styled.div`
// background-color: lightblue;
white-space: nowrap;
box-sizing: content-box;
margin: 2rem 0;
display: flex;

animation: ${move} linear infinite ${props => props.direction};

`
const ImgContainer = styled.div`
width: 15 rem;
margin:0 1rem;
background-color: white;

border-radius: 20px;
cursor: pointer;

@media (max-width: 48em){
    width:12rem;
    }
    
@media (max-width: 30em){
    width:10rem;
    }

img{
    width: 100%;
    border-radius: 20px;
    height: auto%;
}
`

const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: white;
border: 2px solid white;

border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
    font-size: ${props => props.theme.fontsm};
    color: black;
    font-weight: 600;
    line-height: 1.5 rem;
}

h1{
    font-size: ${props => props.theme.fontmd};
    color: ${props => props.theme.body};
    font-weight: 600;

    
@media (max-width: 30em){
    font-size: ${props => props.theme.fontsm};
    
    }

}
`

const Price = styled.div`
display: flex;
align-items: center;

img{
    justify-content: space-between;
    width: 1.2rem;
    height: auto;

}
`

const NftItem = ({img, number=0, price=0, passRef}) => {

    let play = (e) => {
        passRef.current.style.animationPlayState = 'running';
    }
    let pause = (e) => {
        passRef.current.style.animationPlayState = 'paused';
    }

    return(
        <ImgContainer onMouseOver={e => pause(e)}   onMouseOut={e => play(e)}>
            <img src={img} alt='axos' />
            <Details>
                <div>
                    <span>AXO</span> <br/>
                    <h1>#{number}</h1>
                </div>

                <div>
                    <span>Price</span>
                    <Price>
                        <img src={sol} alt='SOL'/> 
                    <h1>{Number(price).toFixed(2)}</h1>
                    </Price>
                </div>
            </Details>
        </ImgContainer>
    )
}

const Showcase = () => {

    const Row1Ref = useRef(null);
    const Row2Ref = useRef(null);


    return (
        <Section id="showcase">
            <Row direction="none" ref={Row1Ref}>
                <NftItem img={img1}  number={"###"} price={0.27}   passRef = {Row1Ref}  />
                <NftItem img={img2}  number={"###"} price={0.27}   passRef = {Row1Ref}  />
                <NftItem img={img3}  number={"###"} price={0.27}   passRef = {Row1Ref}  />
                <NftItem img={img4}  number={"###"} price={0.27}   passRef = {Row1Ref}  />
                <NftItem img={img5}  number={"###" } price={0.27}   passRef = {Row1Ref}  />
            </Row>
            <Row direction="reverse" ref={Row2Ref}>
                <NftItem img={img6}  number={"###"} price={0.27}   passRef = {Row2Ref}  />
                <NftItem img={img7}  number={"###"} price={0.27}   passRef = {Row2Ref}  />
                <NftItem img={img8}  number={"###"} price={0.27}   passRef = {Row2Ref}  />
                <NftItem img={img9}  number={"###"} price={0.27}   passRef = {Row2Ref}  />
                <NftItem img={img2}  number={"###"} price={0.27}     passRef = {Row2Ref}  />
            </Row>
        </Section>
    )
}

export default Showcase