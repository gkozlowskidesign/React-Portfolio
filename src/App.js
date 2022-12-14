import NavBar from "./layouts/Navigation";

import Home from "./pages/Overview/Home";
import Experience from "./pages/Overview/Experience";
import Social from "./pages/Connect/SocialLinks";
import Portfolio from "./pages/Overview/Portfolio";
import Contact from "./pages/Overview/Contact";

import Wine from "./pages/Portfolio/Project-LiquorStore";
import Restaurant from "./pages/Portfolio/Project-Restaurant";
import Metaverse from "./pages/Portfolio/Project-Metaverse";
import Dashboard from "./pages/Portfolio/Project-Dashboard";
import Iteration from "./pages/Portfolio/Project-Portfolio";
import HTMLPort from "./pages/Portfolio/Project-HTMLPort";
import Health from "./pages/Portfolio/Project-Health";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react'

function App() {
  return (
    <Router>
    <div className="App">
     <NavBar />
      <div className="content">
        <Switch>
          <Route exact path="/">
          <Home />
          <Portfolio />
          <Experience />
          <Social />
          <Contact />
          </Route>
          <Route  path="/project-documentation-liquorstore-website">
          <Wine /> 
          </Route>
          <Route  path="/project-documentation-dashboard-user-interface">
          <Dashboard /> 
          </Route>
          <Route  path="/project-documentation-portfolio-website">
          <Iteration /> 
          </Route>
          <Route  path="/project-documentation-restaurant-website">
          <Restaurant /> 
          </Route>
          <Route  path="/project-documentation-healthcare-web-application">
          <Health /> 
          </Route>
          <Route  path="/project-documentation-software-user-interface">
          <Metaverse /> 
          </Route>
          <Route  path="/project-documentation-software-website">
          <Metaverse /> 
          </Route>
          <Route  path="/project-documentation-portfolio-website-html">
          <HTMLPort /> 
          </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
