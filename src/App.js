import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navigation/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </Router>
  );
}

export default App;
