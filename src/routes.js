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
  MenuBusqueda: {
    label: "About",
    path: "/about",
  },
  pokemons: {
    label: "Pokemons",
    path: "/pokemons",
  },
  items: {
    label: "Items",
    path: "/items",
  },
};

export default routes;
