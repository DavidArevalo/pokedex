import * as typesAction from '../actions/typesAction';
import * as pokemonsAction from '../actions/pokemonsAction';
import { combineReducers } from 'redux';

const initialState = {
  pokemons: {
    loading: false,
    data: [],
    error: null,
    nextPage: 0
  },
  types: {
    loading: false,
    data: [],
    error: null,
    nextPage: 0,
  },
};

const pokemons = (state = initialState.pokemons, action={}) => {
  switch (action.type) {
    case pokemonsAction.GETTING_POKEMONS:
      const newState = { ...state, loading: true }
      return newState;
    case pokemonsAction.FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        loading: false,
        error: null,
        nextPage: state.nextPage + 1,
      };
    case pokemonsAction.FETCH_POKEMONS_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

const types = (state = initialState.types, action={}) => {
    switch(action.type) {
        case typesAction.GETTING_TYPES:
            const newState = { ...state, loading: true }
            return newState;
        case typesAction.FETCH_TYPES_SUCCESS:
            return {
              ...state,
              data: [...state.data, ...action.payload],
              loading: false,
              error: null,
              nextPage: state.nextPage + 1,
            };
        case typesAction.FETCH_TYPES_ERROR:
            return { ...state, error: action.payload, loading: false};
        default:
        return state;
    }
}

export default combineReducers({
  pokemons,
  types,
});