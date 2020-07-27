import Home from "./containers/Home";

export const routeTypes = {
  HOME: "INICIO",
};

const routes = {
  // Add a route here in the same format

  home: {
    label: "Inicio",
    path: "/",
  },
  pokemons: {
    label: "Pokemons",
    path: "/pokemons",
  },
  types: {
    label: "Tipos",
    path: "/tipos",
  },
  abilities: {
    label: "Habilidades",
    path: "/habilidades",
  },
};

export default routes;
