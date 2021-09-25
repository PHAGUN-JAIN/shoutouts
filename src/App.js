import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NAVBAR from "./components/nav/NAVBAR";
import MAIN from "./components/main/MAIN";
import STAR from "./components/starperformers/STAR";

function App() {
  return (
    <>
      <NAVBAR />
      <Router>
        <Switch>
          <Route exact path="/">
            <MAIN />
          </Route>
          <Route exact path="/stars">
            <STAR />
          </Route>
          <Route exact path="/rickroll"></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
