import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navigation/Navbar/Navbar";
import LazyInput from "./components/LazyInput/LazyInputCard";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
      <LazyInput />
    </Router>
  );
}

export default App;
