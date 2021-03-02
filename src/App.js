import "./styles.css";
import Nav from "./Nav";
import About from "./About";
import { Recipes } from "./Recipes";
import { RecipeProvider } from "./RecipeContext";

import RecipeDetail from "./RecipeDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
export default function App() {
  return (
    <Router>
      <div className="App">
        <RecipeProvider>
          <Nav />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/recipe" exact component={Recipes} />
            <Route path="/recipe/:id" component={RecipeDetail} />
            <Route path="/about" component={About} />
          </Switch>
        </RecipeProvider>
      </div>
    </Router>
  );
}
