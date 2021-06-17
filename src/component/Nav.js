import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "../pages/Home"
import ReactSpring from "../pages/React Spring/ReactSpring"

const linkNav = [
  {
    name: "React Spring",
    path: "/react-spring",
    component: ReactSpring,
  },
  {
    name: "Home",
    path: "/",
    component: Home,
  },
]

const Nav = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {linkNav.map(({ name, path }, i) => {
              return (
                <li key={i}>
                  <Link to={path}>{name}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <Switch>
          {linkNav.map(({ path, component }, j) => {
            return <Route key={j} path={path} component={component} />
          })}
        </Switch>
      </div>
    </Router>
  )
}

export default Nav
