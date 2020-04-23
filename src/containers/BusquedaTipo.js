import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import FondoApp from "../components/FondoApp";
import styled from "styled-components";
import * as typesAction from '../redux/actions/typesAction'

const BusquedaTipo =() => {
  const loading = useSelector((state) => state.pokedexReducer.loading);
  const data = useSelector((state) => state.pokedexReducer.data);
  const error = useSelector((state) => state.pokedexReducer.error);
  
  const dispatch = useDispatch();

  const _handleGetTypes = async () => {
    dispatch(typesAction.getTypes());
  };

  useEffect(() => {
    dispatch(typesAction.getTypes())
  },[dispatch])

  if (error) {
    return <h4>{error}</h4>;
  }
  
  const types = data;
  
  return (
    <div>
    {
      types.map((type, i) => {
        return (
          <>
          <div>Tipo: {type.name}</div>
          <div>Numero de pokemons: {(type.pokemon).length}</div>
          </>
        )
      })
    }

      {!(types.length > 0) && !loading && <h4>No hay data disponible</h4>}
      {loading && <h4>Cargando...</h4>}
      <button style={{ width: "100%" }} onClick={_handleGetTypes}>
        {types.length === 0 ? "Cargar tipos" : "Cargar más tipos"}
      </button>
    </div>
  );
};
export default BusquedaTipo;