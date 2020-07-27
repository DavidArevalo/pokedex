import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import FormSearch from '../components/FormSearch';
import Input from '../components/Input';
import FondoApp from "../components/FondoApp";
import styled from "styled-components";
import * as typesAction from '../redux/actions/typesAction'
import TypeList from "../components/TypeList";

const Tipos =() => {
  const loading = useSelector((state) => state.pokedexReducer.types.loading);
  const data = useSelector((state) => state.pokedexReducer.types.data);
  const error = useSelector((state) => state.pokedexReducer.types.error);
  
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
      <FormSearch
        onSubmit={console.log("enviado")}
        onBlur={() => null}
        style={{ backgroundColor: 'transparent' }}
        onFocus={() => { console.log('onFocus') }}
      >
        <Input type="text" name="username" />
      </FormSearch>
      <TypeList types={types} />

      {!(types.length > 0) && !loading && <h4>No hay data disponible</h4>}
      {loading && <h4>Cargando...</h4>}
      <button style={{ width: "100%" }} onClick={_handleGetTypes}>
        {types.length === 0 ? "Cargar tipos" : "Cargar más tipos"}
      </button>
    </div>
  );
};
export default Tipos;