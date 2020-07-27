import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as pokemonsAction from "../redux/actions/pokemonsAction";
import PokemonList from "../components/PokemonList";

const Pokemons = () => {
  const loading = useSelector((state) => state.pokedexReducer.pokemons.loading);
  const data = useSelector((state) => state.pokedexReducer.pokemons.data);
  const error = useSelector((state) => state.pokedexReducer.pokemons.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pokemonsAction.getPokemons());
  }, [dispatch]);

  if (error) {
    return <h4>{error}</h4>;
  }

  const pokemons = data;

  return (
    <div style={{ paddingTop: "4rem" }}>
      <PokemonList pokemons={pokemons} />
      {!(pokemons.length > 0) && !loading && <h4>No hay data disponible</h4>}
      {loading && <h4>Cargando...</h4>}
    </div>
  );
};
export default Pokemons;
