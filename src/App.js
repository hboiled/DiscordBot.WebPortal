import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/navbar";

import Home from "./pages/home";
import About from "./pages/about";
import Privacy from "./pages/privacy";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
