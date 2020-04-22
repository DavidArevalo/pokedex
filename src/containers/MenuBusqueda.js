import React from "react";
import FondoApp from "../components/FondoApp";
import Button from "../components/Button";
import styled from "styled-components";
import BusquedaTipo from "./BusquedaTipo";
import BusquedaHabilidades from "./BusquedaHabilidades";
import BusquedaNombre from "./BusquedaNombre";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ContainerButton = styled.div`
  flex-grow: 1;
  margin: 2px;
  vertical-align: middle;
  text-align: center;
`;

const MenuBusqueda = () => {
  return (
    <FondoApp>
      <Router>
        <Container>
          <ContainerButton>
            <Link to="/busquedaTipo">
              <Button bg={"transparent"} bc={"#000000"} color={"#000000"}>
                Busqueda por tipo
              </Button>
            </Link>
          </ContainerButton>

          <ContainerButton>
            <Link to="/busquedaHabilidades">
              <Button bg={"transparent"} bc={"#000000"} color={"#000000"}>
                Busqueda por habilidad
              </Button>
            </Link>
          </ContainerButton>

          <ContainerButton>
            <Link to="/busquedaNombre">
              <Button bg={"transparent"} bc={"#000000"} color={"#000000"}>
                Busqueda por nombre
              </Button>
            </Link>
          </ContainerButton>
        </Container>
        <div>
          <Switch>
            <Route path="/busquedaTipo">
              <BusquedaTipo />
            </Route>
            <Route path="/busquedaHabilidades">
              <BusquedaHabilidades />
            </Route>
            <Route path="/busquedaNombre">
              <BusquedaNombre />
            </Route>
          </Switch>
        </div>
      </Router>
    </FondoApp>
  );
};
export default MenuBusqueda;
