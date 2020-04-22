import React from 'react';
import PokeList from './PokeList';

const ListarPokemon = () => {
   return (
    <div>
        <PokeList /> {/* //enviar aqui los resultados obtenidos de la API */}
    </div>
   );
}

export default ListarPokemon;