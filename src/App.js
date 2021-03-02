import "./styles.css";
import Nav from "./Components/Nav";
import About from "./Components/About";
import { Recipes } from "./Recipes";
import { RecipeProvider } from "./Components/context/RecipeContext";

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
