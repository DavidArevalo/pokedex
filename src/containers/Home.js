import React from "react";
import styled from "styled-components";
import '../App.css';
import fondoVerde from '../assets/images/fondoVerde.png';
import marcotel from '../assets/images/bg.svg';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap :7rem;
  padding: 0 2rem;

  @media screen and (max-width: 1050px){
		grid-gap: 5rem;
  }

  @media screen and (max-width: 900px){
		grid-template-columns: 1fr;
	}
`;

const Img = styled.div`
  display: flex;
	justify-content: flex-end;
	align-items: center;

  @media screen and (max-width: 900px){
		display: none;
	}
`;

const Body = styled.div`
  display: flex;
	justify-content: flex-start;
	align-items: center;

  @media screen and (max-width: 900px){
		justify-content: center;
    text-align: center;
  }
`;

const Article = styled.article`
  width: 400px;

  @media screen and (max-width: 1000px){
		width: 290px;
  }
`;

const Button = styled.button`
  display: block;
	width: 70%;
	height: 50px;
	border-radius: 25px;
	outline: none;
	border: none;
	background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
	background-size: 200%;
	font-size: 1rem;
	color: #fff;
	text-transform: uppercase;
	margin: 1rem 0;
	cursor: pointer;
	transition: .5s;

  &:hover{
	  background-position: right;
  }

  @media screen and (max-width: 900px){
		font-size: .7rem;
    width: 100%;
  }
`;

const Title = styled.h2`

`;

const Parrafo = styled.p`

`;

const Fondo = styled.img`
  position: fixed;
	bottom: 0;
	left: 0;
	height: 100%;
	z-index: -1;
  width: 100%;

  @media screen and (max-width: 900px){
		display: none;
  }
`;

const ImgContent = styled.img`
  width: 500px;

  @media screen and (max-width: 1000px){
		width: 400px;
  }
`;

function Home() {
  return (
    <div style={{ overflow: "hidden"}}> 
      <Fondo src={fondoVerde} />
      <Container>
        <Img>
          <ImgContent src={marcotel}/>
        </Img>
        <Body>
          <Article>
            <Title>TODA LA INFORMACIÓN DE LOS POKEMON A UN SOLO CLICK <br /><br /></Title>
            <Parrafo>
              Informacion completa referente a tipos, habilidades, ataques,
              regiones y más acerca de los pokemons.
            </Parrafo>
            <Button>Comenzar a buscar...</Button>
          </Article>
        </Body>
      </Container>
    </div>
  );
}
export default Home;
