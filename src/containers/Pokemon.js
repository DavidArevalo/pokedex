import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: auto;
  height: 80vh;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`;

export default function Pokemon() {
  const location = useLocation();
  const { id } = useParams()
  const [poke, setPoke] = useState({});

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        ).then((d) => d.json());

        console.log("Data", pokemon)

        setPoke(pokemon);
      } catch (error) {
        console.log("Entro al error", error);
      }
    };
     if ((location.state || {}).data) {
       setPoke(location.state.data);
     } else {
       getPokemon();
     }
   
  }, [id, location.state]);

  return (
    <div>
      <h1>Pokemon: {id}</h1>
      <h2>{poke.name}</h2>
      <figure style={{ width: 300, height: 300 }}>
        <img
          src={(poke.sprites || {}).front_default}
          style={{ width: "100%", height: "auto" }}
        />
      </figure>
      <h2>peso: {poke.weight}</h2>
      <h2>altura: {poke.height}</h2>
    </div>
  );
}
