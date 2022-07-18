import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';


import Form from './components/Form/Form'
import Home from './components/Home/Home'
import Presentation from './components/Presentation/Presentation'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>Início</NavLink>
              </li>
              <li>
                <NavLink to="/adicionar">Formulário</NavLink>
              </li>
              <li>
                <NavLink to="/presentation">Presentation</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/usuarios/:id">
              <DetalhesUsuario />
            </Route>
            <Route path="/usuarios">
              <Usuarios />
            </Route>
            <Route path="/adicionar">
              <AdicionarUsuario />
            </Route>
            <Route path="*">
              <h1>404</h1>
              <p>Página não encontrada!</p>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
