import React, { Component } from "react";
import './App.css';
import { Route, Switch, NavLink } from "react-router-dom";
import Chips from "./Chips";
import Coke from "./Coke";
import Sardines from "./Sardines";
import VendingMachine from "./VendingMachine";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <h1>Vending Machine</h1>
          <ul>
            <NavLink exact activeClassName="active-link" to="/chips">Chips</NavLink>
            <NavLink exact activeClassName="active-link" to="/sardines">Sardines</NavLink>
            <NavLink exact activeClassName="active-link" to="/coke">Coke</NavLink>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/vending" component={VendingMachine}></Route>
          <Route exact path="/chips" component={Chips}></Route>
          <Route exact path="/sardines" component={Sardines}></Route>
          <Route exact path="/coke" component={Coke}></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
