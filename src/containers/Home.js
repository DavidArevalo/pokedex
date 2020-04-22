import React from "react";
import Button from "../components/Button";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
//Images
import logo from "../assets/images/pokemon-home.png";
import pokedex from "../assets/images/pokedex-logo.png";

const Container = styled.div`
  background-image: url(${logo});
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const ContainerButton = styled.div`
  padding-top: 3em;
  padding-left: 15em;
  position: fixed;
`;

const Font = styled.img`
  padding-top: 6em;
  padding-left: 10em;
  position: relative;
`;

function Home() {
  let history = useHistory();

  function _handleClick() {
    history.push("./MenuBusqueda");
  }
  return (
    <Container>
      <Font src={pokedex} />
      <ContainerButton>
        <Button onClick={_handleClick} bg={"transparent"}>
          Empezar
        </Button>
      </ContainerButton>
    </Container>
  );
}
export default Home;
