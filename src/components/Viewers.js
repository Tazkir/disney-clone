import React from 'react';
import styled from 'styled-components';


function Viewers() {

  const handleOnMouseOver = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.play();
  }

  const handleOnMouseOut = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.pause();
  }

  return (
        <Container>
          <Wrap>
            <img src='/images/viewers-disney.png'/>
            <video 
              loop
              preload='none'
              muted
              onMouseOver={handleOnMouseOver}
              onMouseOut={handleOnMouseOut}
              >
              <source src='/video/video1.mp4' type='video/mp4' />
            </video>
          </Wrap>
          <Wrap>
            <img src='/images/viewers-marvel.png'/>
            <video 
              loop
              preload='none'
              muted
              onMouseOver={handleOnMouseOver}
              onMouseOut={handleOnMouseOut}
              >
              <source src='/video/video2.mp4' type='video/mp4' />
            </video>
          </Wrap>
          <Wrap>
            <img src='/images/viewers-national.png'/>
            <video 
              loop
              preload='none'
              muted
              onMouseOver={handleOnMouseOver}
              onMouseOut={handleOnMouseOut}
              >
              <source src='/video/video6.mp4' type='video/mp4' />
            </video>
          </Wrap>
          <Wrap>
            <img src='/images/viewers-pixar.png'/>
            <video 
              loop
              preload='none'
              muted
              onMouseOver={handleOnMouseOver}
              onMouseOut={handleOnMouseOut}
              >
              <source src='/video/video4.mp4' type='video/mp4' />
            </video>
          </Wrap>
          <Wrap>
            <img src='/images/viewers-starwars.png'/>
            <video 
              loop
              preload='none'
              muted
              onMouseOver={handleOnMouseOver}
              onMouseOut={handleOnMouseOut}
              >
              <source src='/video/video7.mp4' type='video/mp4' />
            </video>
          </Wrap>
        </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0 26px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 20px;
`
const Wrap = styled.div`
  position: relative;
  z-index: 10;
  border-radius: 10px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s ;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  
  img{
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  video{
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    pointer-events: none;
  }

  &:hover{
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -10px, 
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    img{
      opacity: 0.5;
    }

    video{
      opacity: 100;
      pointer-events: auto;
      border-radius: 5px;
    }
  }
`