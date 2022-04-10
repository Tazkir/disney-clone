import React, { useEffect , useState} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import { setMovie } from '../features/movie/movieSlice';

function Detail() {

    const { id } = useParams();
    const [ movie, setMovie ] = useState()

    useEffect(() =>{
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc) =>{
            if(doc.exist){
                setMovie(doc.data());
            }else{

            }
        })
    }, [id])

  return (
    <Container>
        <Background>
            <img src='/images/3.jpg' />
        </Background>
        <ImageTitle>
            <img src='/images/Title1.png'/>
        </ImageTitle>
        <Controls>
            <PlayButton>
                <img src='/images/play-icon-black.png' />
                <span>Play</span>
            </PlayButton>
            <TrailerButton>
                <img src='/images/play-icon-white.png' />
                <span>Trailer</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src="/images/group-icon.png" />
            </GroupWatchButton>
        </Controls>
            <SubTitle>
                2022 • Hip-Hop\Rap • The Beautiful & Damned
            </SubTitle>
            <Description>
                Gerald Earl Gillum (born May 24, 1989), better known by his stage name G-Eazy, 
                is an American rapper and record producer. His first major-label album, 
                These Things Happen, was released on June 23, 2014, and peaked at number 3 on 
                the US Billboard 200. His second studio album, When It's Dark Out, was released on December 4, 2015. 
                It featured the single "Me, Myself & I" (with Bebe Rexha), 
                which reached the top 10 of the US Billboard Hot 100.
            </Description>
    </Container>
  
  );
}

export default Detail;

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
        height: 30vh;
        min-height: 170px;
        width: 35vw;
        min-width: 200px;
        margin-top: 60px;
    
    img{
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover{
        background: rgb(198, 198, 198);
        color: white;
        transform: scale(1.05);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s ;
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    color: white;

    &:hover{
        color: black;
    }
`
const AddButton = styled.button`
    width: 44px;
    height: 44px;
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    &:hover{
        transform: scale(1.09);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s ;
    }
    span{
        font-size: 33px;
        color: white;
    }   


`
const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`
const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;
`