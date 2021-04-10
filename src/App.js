import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import LazyInput from "./components/Main/LazyInput/LazyInput";
import Navbar from "./components/Navigation/Navbar/Navbar";

import DarkModeToggle from "../src/components/DarkMode/DarkModeToggle";

import "../src/components/classes.css";

import { GlobalProvider } from "./context/GlobalState";
import { AuthProvider } from "../src/context/Auth";
import Signup from "./auth/signup";

function App() {
  return (
    <AuthProvider>
      <GlobalProvider>
        <Router>
          <Navbar />
          <DarkModeToggle />
          <Switch>
            <Route exact path="/" component={Layout} />
            <Route path="/lazy" component={LazyInput} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
