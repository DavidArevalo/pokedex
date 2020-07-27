import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import styled from "styled-components";
import routes from './routes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
/* import Container from './components/MainContainer'; */
import Home from './containers/Home';
import Pokemons from './containers/Pokemons';
import Tipos from './containers/Tipos';
import Habilidades from './containers/Habilidades';
import logo from './assets/images/logo.png';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Item = ({ children, ...rest }) => {
  return (
    <li>
      <a> <NavLink {...rest}>{children}</NavLink></a>
    </li>
  )
}
const cambiarClase = () => {
  let siteNav = document.getElementById('site-nav');
    siteNav.classList.toggle('site-nav-open');
  let menuOpen = document.getElementById('menu-toggle');
    menuOpen.classList.toggle('menu-open');
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container bgi={true}>
          <main className="main-container">
            <div className="menu-container">
              <div className="logo">
                <img src={logo} />
              </div>
              <nav id="site-nav" className="site-nav">
                <ul>
                  {Object.keys(routes).map((key, i) => {
                    let defaultProps = {
                      activeClassName: "url-active",
                      to: routes[key].path,
                    };
                    if (routes[key].path === "/") defaultProps.exact = true;

                    return (
                      <Item key={`item-${i}-${key}`} {...defaultProps}>
                        {routes[key].label}
                      </Item>
                    );
                  })}
                </ul>
              </nav>
              <div id="menu-toggle" class="menu-toggle" onClick={cambiarClase}>
                <div class="hamburger"></div>
              </div>
            </div>

            <div id="contenedor-rutas">
              <Switch>
                <Route path="/pokemons">
                  <Pokemons />
                </Route>
                <Route path="/tipos">
                  <Tipos />
                </Route>
                <Route path="/habilidades">
                  <Habilidades />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </main>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
