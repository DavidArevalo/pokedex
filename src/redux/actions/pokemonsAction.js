export const GETTING_POKEMONS = 'GETTING_POKEMONS';
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';
export const FETCH_POKEMONS_ERROR = 'FETCH_POKEMONS_ERROR';


const URL_BASE = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemons = () => async (dispatch, getState) => {
    dispatch({ type: GETTING_POKEMONS });
    const state = getState();
    const page = state.pokedexReducer.pokemons.nextPage;
    const limit = 5;
    const offset = page * limit;
    try {
        const pokemonUrls = await fetch(`${URL_BASE}?offset=${offset}&limit=${limit}`)
            .then(res => res.json())
        const results = ((pokemonUrls || {}).results || []).map(pokemon => {
            return fetch(pokemon.url).then(res => res.json());
        })

        const allResults = await Promise.all(results)
        const pokemons = allResults.map(pokemon => {
            return {
                ...pokemon,
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.front_default,
            }
        })

        dispatch({
            type: FETCH_POKEMONS_SUCCESS,
            payload: pokemons,
        })
        return pokemons;
    } catch (error) {
        dispatch({
            type: FETCH_POKEMONS_ERROR,
            payload: error.message,
        })
        throw new Error(error.message)
    }
}