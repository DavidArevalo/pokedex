export const GETTING_TYPES = 'GETTING_TYPES';
export const FETCH_TYPES_SUCCESS = 'FETCH_TYPES_SUCCESS';
export const FETCH_TYPES_ERROR = 'FETCH_TYPES_ERROR';


const URL_BASE = "https://pokeapi.co/api/v2/type/";

export const getTypes = ( ) => async (dispatch, getState) => {
  dispatch({type: GETTING_TYPES});
  const state = getState();
  const page = state.pokedexReducer.types.nextPage;
  const limit = 5;
  const offset = page * limit;
    try {
      const typeUrls = await fetch(`${URL_BASE}?offset=${offset}&limit=${limit}`)
        .then(res => res.json())
      const results = ((typeUrls || {}).results || []).map(type => {
        return fetch(type.url).then(res => res.json());
      })

      const allResults = await Promise.all(results)
      const types = allResults.map(type => {
        return {
          ...type,
          name: type.name,
          numPokemon: (type.pokemon).length,
        }
      })

      dispatch({
          type: FETCH_TYPES_SUCCESS,
          payload: types,
      })
      return types;
    }catch (error) {
      dispatch({
        type: FETCH_TYPES_ERROR,
        payload: error.message,
      })
      throw new Error(error.message)
    }
}