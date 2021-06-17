import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";

const Nav = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default Nav;
