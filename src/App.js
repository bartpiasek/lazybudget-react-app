import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navigation/Navbar/Navbar";
import Main from "./components/Main/Main";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Layout} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
