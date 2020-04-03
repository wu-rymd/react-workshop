import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const navbarStyle = {
    backgroundColor: "gainsboro",
    height: 20,
    padding: "10px 5px"
};

const linkStyle = {
    padding: 5,
    border: "1px solid black",
    margin: 10,
    borderRadius: 5
};

function Navbar(props) {
    return (
        <Router>
          <div style={navbarStyle}>
            <span>{props.websiteName}</span>
            
            <Link to="/" style={linkStyle}> Home </Link>
            <Link to="/about" style={linkStyle}> About </Link>
            <Link to="/contact" style={linkStyle}> Contact </Link>
          </div>

          <Switch>
            <Route path="/about"> <About /> </Route>
            <Route path="/contact"> <Contact /> </Route>
            <Route path="/"> <Home /> </Route>
          </Switch>
          
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL.
              -> Place "/" last */}
            
        </Router>
    );
}

export default Navbar;
