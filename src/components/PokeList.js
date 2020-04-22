import React from 'react'
import PokeRow from './PokeRow'
import styled from 'styled-components'

const Container = styled.div`
  background: gray;
  padding: 1rem;
  width: 25rem;
  display: flex;
  flex-direction: column;
`

// Renderizar una lista de pokemons.
const PokeList = (/* { pokemons = [ ], loading = true } */) => {
  return (
    <Container>
     {/*  {(!(pokemons.length > 0) && !loading) && <h4>No hay data disponible</h4>}
      {pokemons.map(pokemon => { */}
      {/*   return ( */}
          <PokeRow />
       {/*  ) */}
     {/*  })} */}
     {/*  {loading && <h4>Cargando...</h4>} */}
    </Container>
  )
}

export default PokeList;