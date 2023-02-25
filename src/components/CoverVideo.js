import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/covervideo.mp4'



const VideoContainer = styled.div`
width: 100%;
video{
    width:100%;
    height:auto
    border: round;
    border-radius: 50px;
    overflow: hidden;
    z-index: 1;
}

@media (max-width: 64em) {
    min-width: 40vh;
}
`

const CoverVideo = () => {
    return (
        <VideoContainer>
            <video src={GIF} type="video/mp4/" autoPlay muted loop />
        </VideoContainer>
    )

}

export default CoverVideo