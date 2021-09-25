import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NAVBAR from "./components/nav/NAVBAR";
import MAIN from "./components/main/MAIN";
import STAR from "./components/starperformers/STAR";
import RICKROLL from "./components/rickroll/RICKROLL";
import FOOTER from "./components/footer/FOOTER";

function App() {
  return (
    <>
      <NAVBAR />
      <br />
      <br />
      <Router>
        <Switch>
          <Route exact path="/">
            <MAIN />
          </Route>
          <Route exact path="/stars">
            <STAR />
          </Route>
          <Route exact path="/rickroll">
            <RICKROLL />
          </Route>
        </Switch>
      </Router>
      <br />
      <br />
      <FOOTER />
    </>
  );
}

export default App;
