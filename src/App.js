import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import DarkModeToggle from "./components/DarkMode/DarkModeToggle";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navigation/Navbar/Navbar";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <DarkModeToggle />
        <Switch>
          <Route path="/" component={Layout} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
