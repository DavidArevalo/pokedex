import React from "react";
import styled from "styled-components";
import '../App.css'

const Container = styled.div`
  border: 2px solid #50D890;
`;
const InfoContainer = styled.div` 
  display: flex;
  flex-direction: row;
`;
const Icon = styled.img`
  width: 3em;
  height: 3em;
`;
const Title = styled.h4`
  margin: auto;
  text-transform: capitalize;
  
`;
const Text = styled.p``;

const PokemonComponent = ({ name = "pikachu", image, ...rest }) => {
  return (
    <Container>
      <InfoContainer>
        <Icon src={image}/>
        <Title>{name}</Title>
      </InfoContainer>
    </Container>
  );
};

export default PokemonComponent;
