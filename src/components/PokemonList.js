import React from "react";
import PokemonComponent from "./PokemonComponent";
import styled from "styled-components";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Pokemon from "../containers/Pokemon";
import { useDispatch } from "react-redux";
import * as pokemonsAction from "../redux/actions/pokemonsAction";

const Container = styled.div`
  padding: auto;
  margin: auto;
  width: auto;
  height: 85vh;
`;

const PartOne = styled.div`
  height: 87vh;
  width: 20%;
  position: fixed;
  z-index: 1;
  top: auto;
  overflow-x: hidden;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;

  left: 0;
  transition: 0.9s;

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    top: 4rem;
    height: 13%;
    width: 100%;
    padding-top: 0;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    
  }

  @media only screen and (max-width: 767px) {
    top: 4rem;
    height: 13%;
    width: 100%;
    padding-top: 0;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;

const PartTwo = styled.div`
  height: 87vh;
  width: 80%;
  position: fixed;
  z-index: 1;
  top: auto;
  overflow-x: hidden;

  right: 0;
  transition: 0.9s;

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    height: 55vh;
    width: 100%;
    padding-top: 0;
    top: 15rem;
    overflow-y: scroll;
    
  }

  @media only screen and (max-width: 767px) {
    height: 55vh;
    width: 100%;
    padding-top: 0;
    top: 15rem;
    overflow-y: scroll;
  }
`;


// Renderizar una lista de pokemons.
const PokemonList = React.memo(({ pokemons = [], onClick }) => {

  const dispatch = useDispatch();

  const _handleGetPokemons = async () => {
    dispatch(pokemonsAction.getPokemons());
  };
  return (
    <Container>
      <Router>
        <PartOne>
          {pokemons.map((pokemon, i) => {
            return (
              <NavLink to={`/pokemons/${i + 1}`} style={{
                color: "yellow",
                textDecoration: 'none',
              }}>
                <PokemonComponent
                  onClick={onClick}
                  key={`pokemon-${i}`}
                  {...pokemon}
                />
              </NavLink>
            );
          })}
          <button style={{ width: "5rem", height: "3rem"}} onClick={_handleGetPokemons}>
            {pokemons.length === 0 ? "Cargar pokemons" : "Cargar más pokemons"}
          </button>
        </PartOne>
        <PartTwo>
          <Route path="/pokemons/:id" component={Pokemon} />
        </PartTwo>
      </Router>
    </Container>
  );
});

export default PokemonList;
