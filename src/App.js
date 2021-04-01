import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import LazyInput from "./components/Main/LazyInput/LazyInput";
import Navbar from "./components/Navigation/Navbar/Navbar";

import DarkModeToggle from "../src/components/DarkMode/DarkModeToggle";

import "../src/components/classes.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <DarkModeToggle />
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route path="/lazy" component={LazyInput} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
