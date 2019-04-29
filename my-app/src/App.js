import React, { Component } from 'react';
import { Route, BrowserRouter, NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';
import Home from './Components/Home';
import History from './Components/History';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav className="bg-light">
          <NavLink to="/" className="tab">Home</NavLink>
          <NavLink to="/our-history" className="tab" activeStyle={{ color: 'red' }}>History</NavLink>
        </Nav>
        <Route exact path="/" component={Home} />
        <Route path="/our-history" component={History} />
      </BrowserRouter >
    );
  }
}

export default App;