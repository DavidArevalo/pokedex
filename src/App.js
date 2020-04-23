import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Home from './containers/Home';
import store from './store';
import MenuBusqueda from './containers/MenuBusqueda';
import BusquedaTipo from './containers/BusquedaTipo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/MenuBusqueda">
            <MenuBusqueda />
          </Route>
          <Route path="/BusquedaTipo">
            <BusquedaTipo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
