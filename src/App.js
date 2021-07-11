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
import Login from "./auth/login";
import PrivateRoute from "../src/auth/privateRoute";
import Dashboard from "./components/Analytics/Dashboard";
import { TransactionsProvider } from "./context/TransactionListContext";

function App() {
  return (
    <AuthProvider>
      <GlobalProvider>
        <TransactionsProvider>
          <Router>
            <Navbar />
            <Switch>
              <PrivateRoute exact path="/" component={Layout} />
              <Route path="/lazy" component={LazyInput} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/analytics" component={Dashboard} />
            </Switch>
          </Router>
        </TransactionsProvider>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
