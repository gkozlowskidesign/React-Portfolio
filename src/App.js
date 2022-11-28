import NavBar from "./layouts/Navigation";
import Home from "./pages/Overview/Home";
import Experience from "./pages/Overview/Experience";
import Social from "./pages/Connect/SocialLinks";
import Portfolio from "./pages/Overview/Portfolio";
import Contact from "./pages/Overview/Contact";
import Projects from "./pages/Publications/Publications-Medium";
import Wine from "./pages/Portfolio/Project-LiquorStore";
import Restaurant from "./pages/Portfolio/Project-Restaurant";
import Metaverse from "./pages/Portfolio/Project-Metaverse";
import Dashboard from "./pages/Portfolio/Project-Dashboard";
import Iteration from "./pages/Portfolio/Project-Portfolio";
import Health from "./pages/Portfolio/Project-Health";
import Publications from "./pages/Overview/Publications";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Switch>
          <Route exact path="/">
          <NavBar/>
          <Home/>
          <Publications/>
          <Experience/>
          <Portfolio/>
          <Social/>
          <Contact/>
          </Route>
          <Route  path="/background/education">
          <NavBar/>
          <Experience/>
          <Social/> 
          </Route>
          <Route  path="/background/experience">
          <NavBar/>
          <Experience/> 
          <Social/>
          </Route>
          <Route  path="/background/freelance">
          <NavBar/>
          <Experience/> 
          <Social/>
          </Route>
          <Route  path="/project-documentation-liquorstore-website">
          <NavBar/>
          <Wine/> 
          </Route>
          <Route  path="/project-documentation-dashboard-user-interface">
          <NavBar/>
          <Dashboard/> 
          </Route>
          <Route  path="/project-documentation-portfolio-website">
          <NavBar/>
          <Iteration/> 
          </Route>
          <Route  path="/project-documentation-restaurant-website">
          <NavBar/>
          <Restaurant/> 
          </Route>
          <Route  path="/project-documentation-healthcare-web-application">
          <NavBar/>
          <Health/> 
          </Route>
          <Route  path="/project-documentation-software-user-interface">
          <NavBar/>
          <Metaverse/> 
          </Route>
          <Route  path="/project-documentation-software-website">
          <NavBar/>
          <Metaverse/> 
          </Route>
          <Route  path="/publications">
          <NavBar/>
          <Projects/> 
          <Social/>
          </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
